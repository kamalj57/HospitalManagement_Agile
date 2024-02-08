import { useState } from 'react';
import "./uidesign.css";
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';

const FillPatient=()=> {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        contactNumber: '',
        AdmitTime: '',
        AdmitDate: '',
        gender: '',
        paymentMethod: '',
        hasInsurance: '',
        insurancePolicy: '',
        wardNumber: '',
        amount: ''
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
       axios.post('http://localhost:8000/patientform', formData)
            .then(res => {
                if (res.data.Status === 'Success') {
                    toast.success("Successfully Updated");
                }
                else {
                    toast.error("Updated Failed!");
                }
            })
            .catch(err => {
                console.log('Error', err);
            })
    };
    return (
        <>
            <div className="patientouter">
            <Toaster position='top-right'></Toaster>
                <form className="patientform" onSubmit={handleSubmit}>
                    <h1 className="patientname">Patient Details</h1>
                    <div className="patientflex">
                        <label htmlFor='firstName' className='patientlabrl'>First Name </label>
                        <input
                            required
                            type="text"
                            className="patientinput"
                            name='firstName'
                            id='firstName'
                            value={formData.firstName}
                            onChange={handleChange}
                        />

                        <label className='patientlabrl'>LastName</label>
                        <input
                            required
                            type="text"
                            className="patientinput"
                            name='lastName'
                            id='lastName'
                            value={formData.lastName}
                            onChange={handleChange}
                        />

                    </div>

                        <label htmlFor='gender' className='patientlabrl'>Gender</label>
                        <div className="patientradio">
                        <input
                            type="radio"
                            value="male"
                            name="gender"
                            id="gender"
                            checked={formData.gender === 'male'}
                            onChange={handleChange}
                        />
                        <label htmlFor="male" className='patientlabrl'>Male</label>

                        <input
                            type="radio"
                            value="female"
                            name="gender"
                            id="gender"
                            checked={formData.gender === 'female'}
                            onChange={handleChange}
                        />
                        <label htmlFor="female" className='patientlabrl'>Female</label>
                    </div>
                    <div className="patientflex1">
                        <label htmlFor='email' className='patientlabrl'>Email</label>
                        <input
                            required
                            type="email"
                            className="patientinput"
                            name='email'
                            id='email'
                            value={formData.email}
                            onChange={handleChange}
                        />

                        <br></br>
                        <label htmlFor='contactNumber' className='patientlabrl'>Contact Number </label>
                        <input
                            required
                            type="tel"
                            name='contactNumber'
                            id='contactNumber'
                            className="patientinput"
                            value={formData.contactNumber}
                            onChange={handleChange}
                        />

                        <div className="patientflex5">
                            <label htmlFor='AdmitDate' className='patientlabrl'>Admit Date</label>
                            <input
                                required
                                type="date"
                                className="patientinput"
                                name='AdmitDate'
                                id='AdmitDate'
                                value={formData.AdmitDate}
                                onChange={handleChange}
                            />
                        </div>
                        <label htmlFor='AdmitTime' className='patientlabrl'>Admit Time</label>
                        <input
                            required
                            placeholder=""
                            type="time"
                            className="patientinput"
                            name='AdmitTime'
                            id='AdmitTime'
                            value={formData.AdmitTime}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="patientform1">
                        <h1 className="patientregistration">Payment Details</h1>
                        <div className="patientpayment-method">
                            <label htmlFor='paymentMethod' className='patientlabrl'>Payment Method:</label>
                            <select
                                name='paymentMethod'
                                id='paymentMethod'
                                value={formData.paymentMethod}
                                onChange={handleChange}
                            >
                                <option value="online">Online</option>
                                <option value="offline">Offline</option>
                            </select>
                        </div>
                        <div className="patientinsurance-radio" >
                            <label htmlFor='hasInsurance' className='patientlabrl'>Do you have insurance?</label>
                            <label>
                                <input
                                    type="radio"
                                    value="yes"
                                    name="hasInsurance"
                                    id="hasInsurance"
                                    checked={formData.hasInsurance === 'yes'}
                                    onChange={handleChange}
                                />
                                Yes
                            </label>

                            <label>
                                <input
                                    type="radio"
                                    value="no"
                                    name="hasInsurance"
                                    checked={formData.hasInsurance === 'no'}
                                    onChange={handleChange}
                                />
                                No
                            </label>
                        </div>

                        {formData.hasInsurance === 'yes' && (
                            <div className="patientinsurance-policy">
                                <label htmlFor='insurancePolicy' className='patientlabrl'>Insurance Number</label>
                                <input
                                    required
                                    name='insurancePolicy'
                                    id='insurancePolicy'
                                    type="text"
                                    className="patientinput"
                                    value={formData.insurancePolicy}
                                    onChange={handleChange}
                                />
                            </div>
                        )}
                        <div className="patientward">
                            <label className='patientlabrl'> Ward Number </label>
                            <input
                                required
                                type="tel"
                                className="patientinput"
                                name='wardNumber'
                                id='wardNumber'
                                value={formData.wardNumber}
                                onChange={handleChange}
                            />

                        </div>
                        <div className="patientward">
                            <label htmlFor='amount' className='patientlabrl'>Advance Payment  </label>
                            <input
                                required
                                type="tel"
                                name='amount'
                                id='amount'
                                className="patientinput"
                                value={formData.amount}
                                onChange={handleChange}
                            />
                        </div>
                        
                        <button type="submit"className='patientbutton'>Submit</button>
                    </div>
                </form>
            </div>
        </>
    )

}
export default FillPatient;
