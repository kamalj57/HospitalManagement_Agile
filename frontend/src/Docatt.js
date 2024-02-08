import React from 'react';
import Da from './Docatt.module.css';
import { Link } from 'react-router-dom';
import Nav from './components/Nav.js'

export default function Docatt() {
  return (
    <div className={Da.dmn}>
        <Nav/>
        <div className={Da.dmn1}>
            <div className={Da.dmn11}>
                <h1>S.No</h1>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
                <p>6</p>
                <p>7</p>
            </div>
            <div className={Da.dmn1a}>
                <h1>Doctor Name </h1>
                <p>Karthickrajan S</p>
                <p>Karthickrajan S</p>
                <p>Karthickrajan S</p>
                <p>Karthickrajan S</p>
                <p>Karthickrajan S</p>
                <p>Karthickrajan S</p>
                <p>Karthickrajan S</p>
            </div>
            <div className={Da.dmn1b}>
                <h1>Punched Timing</h1>
                <p>8.01 am</p>
                <p>8.01 am</p>
                <p>8.01 am</p>
                <p>8.01 am</p>
                <p>8.01 am</p>
                <p>8.01 am</p>
                <p>8.01 am</p>
            </div>
        </div>
    </div>
  )
}