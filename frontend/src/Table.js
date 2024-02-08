import React from 'react'
import "./table.css";
import { Link } from "react-router-dom";

export default function Table() {
  return (
    <div >
    <table id="myTable">
  <caption>Doctor Appointment</caption>
  <thead>
    <tr>
      <th scope="col">Department</th>
      <th scope="col">Number Of Doctors Available</th>
      <th scope="col">Floor Number</th>
      <th scope="col">Book Now</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td scope="row" data-label="Department">Cardiologist</td>
      <td>2</td>
      <td>1</td>
      <td><a href="/Docappointment" className='lkn'>Click To Book</a></td>
    </tr>
    <tr>
      <td scope="row" data-label="Department">Dermatologist</td>
      <td>3</td>
      <td>2</td>
      <td><a href="/Docappointment">Click To Book</a></td>
    </tr>
    <tr>
      <td scope="row" data-label="Department">Orthopedic</td>
      <td>2</td>
      <td>3</td>
      <td><a href="/Docappointment">Click To Book</a></td>
    </tr>
    <tr>
      <td scope="row" data-label="Department">Gynecologist</td>
      <td>4</td>
      <td>1</td>
      <td><a href="/Docappointment">Click To Book</a></td>
    </tr>
    <tr>
      <td scope="row" data-label="Department">Pediatrician</td>
      <td>3</td>
      <td>2</td>
      <td><a href="/Docappointment">Click To Book</a></td>
    </tr>
    <tr>
      <td scope="row" data-label="Department">Neurologist</td>
      <td>2</td>
      <td>3</td>
      <td><a href="/Docappointment">Click To Book</a></td>
    </tr>
    <tr>
      <td scope="row" data-label="Department">Ophthalmologist</td>
      <td>3</td>
      <td>1</td>
      <td><a href="/Docappointment">Click To Book</a></td>
    </tr>
    <tr>
      <td scope="row" data-label="Department">ENT Specialist</td>
      <td>2</td>
      <td>2</td>
      <td><a href="/Docappointment">Click To Book</a></td>
    </tr>
  </tbody>
</table>

    </div>
  )
}
