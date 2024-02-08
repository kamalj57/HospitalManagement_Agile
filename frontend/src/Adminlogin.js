import {React,useState} from 'react'
import './Admincss.css';
import { useNavigate,Link } from 'react-router-dom';
import axios  from 'axios';
import {toast,Toaster} from 'react-hot-toast'
export default function Adminlogin() {
  
 
  const [formData, setFormData] = useState({
    email: '',
    password: '',
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
    console.log(formData)
    axios.post('http://localhost:8000/login', formData)
      .then(res=> {
        if (res.data.Status === 'Admin' || res.data.Status === 'Doctor/Nurse') {
          toast.success('Login successful!');
          navigate('/Adminpage');
        } else if (res.data.Status === 'Public') {
          toast.success('Login successful!');
          navigate('/');
        } else {
          toast.error('check your credentials.');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        toast.error("Enter Valid Credentials")
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
      <div className='log'>
        <h1>Login</h1>
        <div className='mnq'>
          <Toaster position='top-right'></Toaster>
        <form onSubmit={handleSubmit} autoComplete='off'>
          <label className='lb1'>Email</label><br />
          <input className='inp1' name="email"
              placeholder='Enter email id'
              type='email'
              value={formData.email}
              onChange={handleChange}  /><br /><br />
          <label className='lb1'>Password :</label><br />
          <input className='inp1' name="password"
              placeholder='Enter your password'
              type='password'
              value={formData.password}
              onChange={handleChange}  /><br />
            <button type='submit'  className='ln1'>Login</button>
           </form>
          <br />
          <label>Dont have an account ?<Link to='/signup'> Sign Up</Link></label>
        </div>

      </div>
    </div>
  )
}
