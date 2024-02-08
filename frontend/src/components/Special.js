import React, { Component } from 'react'
import logo1 from './image/heart-rate-monitor_3703527.png';
import logo2 from './image/brainstorm_1786985.png';
import logo3 from './image/stomach_9056025.png';
import logo4 from './image/orthopedics_6177173.png';
import logo5 from './image/black-ribbon_6056687.png';
import logo6 from './image/embryo_819056.png';
import logo7 from './image/lungs_1834916.png';
import logo8 from './image/pediatric.png';
import logo9 from './image/services_5346638.png';
import logo10 from './image/blueprint_2704934.png';


export default class Special extends Component {
  render() {
    return (
      <div>
       <div className='doc'>
        <h1>Explore our Centres of <span>Clinical Excellence</span></h1>
        <div className='cln'>
          <div className='cln1'>
          <img src={logo1} className="logo1" alt="logo" />
          <p>Cardiology</p>
          </div>
          <div className='cln1'>
          <img src={logo2} className="logo1" alt="logo" />
          <p>Neurology</p>
          </div>
          <div className='cln1'>
          <img src={logo3} className="logo1" alt="logo" />
          <p>Gastroenterology</p>
          </div>
          <div className='cln1'>
          <img src={logo4} className="logo1" alt="logo" />
          <p>Orthopedics</p>
          </div>
          <div className='cln1'>
          <img src={logo5} className="logo1" alt="logo" />
          <p>Oncology</p>
          </div>
          <div className='cln1'>
          <img src={logo6} className="logo1" alt="logo" />
          <p>Gynecology</p>
          </div>
          <div className='cln1'>
          <img src={logo8} className="logo1" alt="logo" />
          <p>Pediatric</p>
          </div>
          <div className='cln1'>
          <img src={logo7} className="logo1" alt="logo" />
          <p>Pulmonology</p>
          </div>
          <div className='cln1'>
          <img src={logo9} className="logo1" alt="logo" />
          <p>Child Health</p>
          </div>
          <div className='cln1'>
          <img src={logo10} className="logo1" alt="logo" />
          <p>General Health</p>
          </div>
          <div className='cln1'>
          <img src={logo1} className="logo1" alt="logo" />
          <p>Cardiology</p>
          </div>
          <div className='cln1'>
          <img src={logo1} className="logo1" alt="logo" />
          <p>Cardiology</p>
          </div>
        </div>
        <p className="bot4">+Learn about the world class healthcare we provide</p>
      </div>
      </div>
    )
  }
}
