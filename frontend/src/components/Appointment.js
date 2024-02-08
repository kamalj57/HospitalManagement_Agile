import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faFileWaveform } from '@fortawesome/free-solid-svg-icons';
import { faEarthAsia } from '@fortawesome/free-solid-svg-icons';
import { faPills } from '@fortawesome/free-solid-svg-icons';
import { faHospital } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default class Appointment extends Component {
  render() {
    return (
      <div>
        <div className="appt">
        <h1>Book  <span>Your Appointments </span> Now</h1><br></br>
        <div className="mncont">
        <div className="mncont1">
        <div className='icon'><FontAwesomeIcon icon={faCalendar} /></div>
          <h1>Book Your Appointment</h1>
          <Link to="/Table">Learn More--</Link>
        </div>
        <div className="mncont1">
        <div className='icon'><FontAwesomeIcon icon={faFileWaveform} /></div>
          <h1>Book Health Checkup</h1>
          <Link to="/bookappointment">Learn More--</Link>
        </div>
        <div className="mncont1">
        <div className='icon'><FontAwesomeIcon icon={faEarthAsia} /></div>
          <h1>Consult Online</h1>
          <Link to="/bookappointment">Learn More--</Link>
        </div>
        <div className="mncont1">
        <div className='icon'><FontAwesomeIcon icon={faPills} /></div>
          <h1>Online Medicine </h1>
          <a href="#">Learn More--</a>
        </div>
        <div className="mncont1">
        <div className='icon'><FontAwesomeIcon icon={faHospital} /></div>
          <h1>Our Hospitals </h1>
          <a href="#">Learn More--</a>
        </div>
      </div>
        </div>
      </div>
    )
  }
}
