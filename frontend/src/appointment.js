import React, { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
// import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Appointimg from './appontimg.png';
import axios from 'axios';
import Ap from './appointment.module.css';
import Nav from './components/Nav';

const Appointmentbooking = () => {
    const [formData, setFormData] = useState({
        Name: '',
        email:'',
        preferredDate: '', 
        phoneNumber: '',
        startTime: '', 
        endTime: '', 
        reasonForVisit: '',
        department: '',
        doctor: ''
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
        axios.post('http://localhost:8000/bookappointment',formData)
          .then(res=>{
              if(res.data.Status==='Success'){
                toast.success("Successfully Booked");
              }
              else{
                toast.error("Booking Failed!");
              }
          })
          .catch(err=>{
            console.log('Error',err);
          })
    };
   
    const departments = ['Pediatric', 'Gynecology', 'Cardiology'];
    const selectedDepartment = formData.department;
    const doctors = {
        Pediatric: ['Kamalesh', 'Karan'],
        Gynecology: ['Karthick'],
        Cardiology: ['Kamalesh', 'Karan', 'Karthick'],
    };
   const visits=['Routine CheckUp','New Appointment','Online Consultant','Specific Concern']
    return (
        
        <div className={Ap.main}>
            <Nav/>
            <Toaster position='top-right'></Toaster>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                <div className={Ap.mainml}>
                    <div className={Ap.mcm1}>
                    <div className="flex">
                        <div className="p-2">
                            <h1 className={Ap.h1t1}>Name</h1>
                            <input
                               type='text'
                               name='Name'
                                className={Ap.inpu121}
                                placeholder="Please enter the full name"
                                onChange={handleChange}
                                value={formData.Name}
                            />
                            <h1 className={Ap.h1t1}>Email</h1>
                            <input
                               type='email'
                               name='email'
                                className={Ap.inpu12}
                                placeholder="Please enter the full name"
                                onChange={handleChange}
                                value={formData.email}
                            />
                            <h1 className={Ap.h1t}>Preferred Date</h1>
                            <input type='date'
                               name='preferredDate'
                               value={formData.preferredDate}
                               onChange={handleChange}
                               className={Ap.inpu1}
                            />
                        </div>
                    </div>
                    <div>
                        <div className="flex" style={{ left: '45rem',top:"20px"}}>
                            <div className="p-2">
                                <h1 className={Ap.h1t}>Phone Number</h1>
                                <input
                                 type='text'
                                 name='phoneNumber'
                                    className={Ap.inpu1}
                                    placeholder="Please enter your phone Number"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                />
                                <h1 className={Ap.h1t}>Preferred Time</h1>
                                <div>
                                    <input
                                        type="time"
                                        name='startTime'
                                        value={formData.startTime}
                                        onChange={handleChange}
                                        className = {Ap.inpu1} />
                                        
                                    <span>:</span><br></br>
                                    <input
                                        type="time"
                                        name='endTime'
                                        value={formData.endTime}
                                        onChange={handleChange}
                                        className = {Ap.inpu1}  />
                                </div>
                            </div>

                        </div>
                    </div>
                    </div>
                    <div className={Ap.mont1}>
                    <div className="w-1/2">
                        <label htmlFor="reasonForVisit" className={Ap.h1t2}>Reason For visit</label><br/><br/>
                        <select

                                name='reasonForVisit'
                                id='reasonForVisit'
                                value={formData.reasonForVisit}
                                onChange={handleChange}
                                className = {Ap.inpu1} 
                            ><br/><br/>
                                <option value="">Select Reason of visit</option>
                                {visits.map((dept) => (
                                    <option key={dept} value={dept}>
                                        {dept}
                                    </option>
                                ))}
                            </select>
                          
                    </div>
                    <div className="mb-4">
                        <div>
                            <br/><label htmlFor="department" className={Ap.h1t2}>
                                Department
                            </label><br/><br/>
                            <select
                            id='department'
                            name='department'
                               value={formData.department}
                               onChange={handleChange}
                               className = {Ap.inpu1} 
                            ><br/><br/><br/>
                                <option value="">Select Department</option>
                                {departments.map((dept) => (
                                    <option key={dept} value={dept}>
                                        {dept}
                                    </option>
                                ))}
                            </select>
                            
                        </div>
                        
                        <div className="mt-4">
                           <br/> <label htmlFor="doctor"className={Ap.h1t2}>
                                Select Doctor
                            </label><br/><br/>
                            <select
                                id="doctor"
                                name='doctor'
                                value={formData.doctor}
                                onChange={handleChange}
                                className = {Ap.inpu1} 
                            >
                                <option value="">Select Doctor</option>
                                { selectedDepartment &&
                                    doctors[selectedDepartment].map((doc) => (
                                        <option key={doc} value={doc}>
                                            {doc}
                                        </option>
                                    ))}
                            </select>
                         
                        </div>
                    </div>
                    </div>
                    </div>
                    <button
                        type="submit"
                        className={Ap.bbtt11}
                    >
                    Submit
                    </button>
                </div>
            </form >
            <div>
                <img className={Ap.imgmg1} src={Appointimg}></img>
            </div>
        </div >
    );
};
export default Appointmentbooking;



