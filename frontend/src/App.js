import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Table from './Table';
import Home from './Home';
import Docappointment from './Docappointment';
import Adminlogin from './Adminlogin';
import Adminpage from './Adminpage';
import Appointmentbooking from './appointment';
import Signup from './signup';
import FillPatient from './FillPatient';
import Docatt from './Docatt';
function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route path='/Table' element={<Table/>}></Route>
        <Route path='/Adminlogin' element={<Adminlogin/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/Docappointment' element={<Docappointment/>}></Route>
        <Route path='/Adminpage' element={<Adminpage/>}></Route>
        <Route path='/bookappointment' element={<Appointmentbooking/>}></Route>
        <Route path='/patientform' element={<FillPatient/>}></Route>
        <Route path='/doctor-attendance' element={<Docatt/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
