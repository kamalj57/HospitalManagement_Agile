import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faFileWaveform } from '@fortawesome/free-solid-svg-icons';
import { faEarthAsia } from '@fortawesome/free-solid-svg-icons';
import { faPills } from '@fortawesome/free-solid-svg-icons';
import { faHospital } from '@fortawesome/free-solid-svg-icons';      

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div className='feedback'>
        <div className='prof'>
          <h1>HEALTH PLUS</h1><br></br>
          <a href="#" className='ii1'><FontAwesomeIcon icon={faEnvelope} /></a>
          <h3>aiimsorg@gmail.com</h3><br></br>
          <a href="#" className='ii2'><FontAwesomeIcon icon={faPhoneVolume} /></a>
          <p>+990 1234567</p>
        </div>
      </div>
      <div className='comp'>
        <h1>Company</h1>
        <p>About Us</p>
        <p>Features</p>
        <p>Our Policy</p>
        <p>Contact Us</p>
      </div>
      <div className='pol'>
        <h1>Our Policies</h1>
        <p>Privacy Policy</p>
        <p>Terms Of users</p>
        <p>Cookies Polices</p>
        <p>GDPR Policies</p>
      </div>
      <div className='soc'>
        <h1>Social Media</h1>
        <a href="#" className='ii5'><FontAwesomeIcon icon={faInstagram} /></a><p>Instagram</p>
        <a href="#" className='ii5'><FontAwesomeIcon icon={faLinkedin} /></a><p>LinkedIn</p>
        <a href="#" className='ii5'><FontAwesomeIcon icon={faGithub} /></a><p>Git Hub</p>
        <a href="#" className='ii5'><FontAwesomeIcon icon={faWhatsapp} /></a><p>WhatsApp</p>
      </div>
      .<div className='add'>
        <p>4517 Washington Ave,<br></br>Manchester,<br></br>Kentucky 39495.
        </p>
      </div>
      <div className='sub'>
        <input name="name" className='inp' placeholder='Enter your name'></input>
        <button type='submit' className='bbt'>Submit</button>
      </div>
      </div>
    )
  }
}
