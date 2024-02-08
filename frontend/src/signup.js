import { useState, React } from 'react'
import './Admincss.css';
import { useNavigate,Link } from 'react-router-dom';
import axios from 'axios'

export default function Signup() {
  const usertype = ['Public', 'Admin', 'Doctor/Nurse']
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    usertype: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const navigate=useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/signup', formData)
      .then(res=> {
        if(res.data.Status==='Admin'){
          navigate('/Adminpage')
         }
         else if(res.data.Status==='Doctor/Nurse'){
          navigate('/Adminpage')
         }
         else if(res.data.Status==='Public'){
           navigate('/');
         }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };
  return (
    <div className='adm'>
      <div>
        <nav className="navbar">
          <ul>Hospitals</ul>
          <ul>Privacy Policy</ul>
          <ul>Contact Us</ul>
        </nav>
        <div className="logo">
          <h1>HEALTH PLUS<span> </span></h1>
        </div>
      </div>
      <div className='log1'>
        <h1 style={{textAlign:'center'}}>Sign Up</h1>
        <div className='mnq'>
          <form onSubmit={handleSubmit} autoComplete='off'>
            <label className='lb1'>Email</label><br />
            <input className='inp1' name="email"
              placeholder='Enter email id'
              type='email'
              value={formData.email}
              onChange={handleChange} /><br /><br />
            <label className='lb1'>Password</label><br />
            <input name="password"
              placeholder='Enter Password'
              type='password'
              className='inp1'
              value={formData.password}
              onChange={handleChange} /><br />
            <label className='lb1'>Confirm Password</label><br />
            <input placeholder='Enter Password' type='password' className='inp1' /><br />
            <label className='lb1'>User Type</label><br />
            <select name="usertype"
              className='input'
              value={formData.usertype}
              onChange={handleChange} >
              <option value="">Select Usertype</option>
              {usertype.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            <br/>
            <button type='submit' className='ln1'>Login</button>
            <br />
          </form>
          <label>Already have an account ?<Link to='/Adminlogin'> Signin</Link></label>

        </div>

      </div>
    </div>
  )
}
