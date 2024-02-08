const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const path = require("path");
const dotenv = require("dotenv");
const cors = require("cors");
const { hashedPassword, comparePassword } = require('./helpers/helper');
const connected = require('./config/database');
const connection = connected()
dotenv.config({ path: path.join(__dirname, "config/config.env") });

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.post('/signup', async (req, res) => {
  try {
    const { email, password, usertype } = req.body;
    console.log(email, password, usertype)
    if (!email) {
      return res.json({ Error: "Email is required" });
    }
    if (!password || password.length < 6) {
      return res.json({ Error: "Password required and should be at least 6 characters" });
    }
    if (!usertype) {
      return resjson({ Error: "User type is needed" });
    }

    const hashPassword = await hashedPassword(password);

    checkExistingUser(email, (error, userExists) => {
      if (error) {
        console.error(error);
        return res.json({ error: "Database error" });
      }
      if (userExists) {
        return res.json({ Error: "Email is already registered" });
      } else {
        createUser(email, hashPassword, usertype, (err, result) => {
          if (err) {
            console.error(err);
            return res.status(500).json({ error: "Failed to create user" });
          }
          if (usertype == 'Admin') {
            return res.json({ Status: "Admin" });
          }
          else if (usertype == 'Doctor/Nurse') {
            return res.json({ Status: "Doctor/Nurse" });
          }
          if (usertype == 'Public') {
            return res.json({ Status: "Public" });
          }
        });
      }
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

function checkExistingUser(email, callback) {
  connection.query('SELECT * FROM login WHERE email = ?', [email], (error, results) => {
    if (error) {
      return callback(error);
    }
    callback(null, results.length > 0);
  });
}


function createUser(email, hashPassword, usertype, callback) {
  connection.query('INSERT INTO login (email, password,usertype) VALUES (?, ?,?)', [email, hashPassword, usertype], (error, result) => {
    if (error) {
      return callback(error);
    }
    callback(null, result);
  });
}


app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }
    if (!password || password.length < 6) {
      return res.status(400).json({ error: "Password required and should be at least 6 characters" });
    }


    connection.query('SELECT * FROM login WHERE email = ?', [email], async (error, results) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ error: "Database error" });
      }

      if (results.length === 0) {
        return res.status(401).json({ error: "Invalid email or password" });
      } else {
        const storedHashedPassword = results[0].password;
        const passwordMatch = await comparePassword(password, storedHashedPassword);

        if (!passwordMatch) {
          return res.status(401).json({ error: "Invalid email or password" });
        }

        const userType = results[0].usertype;
        console.log(userType);
        if (userType === 'Admin') {
          return res.json({ Status: "Admin" });
        } else if (userType === 'Docotr/Nurse') {
          return res.json({ Status: "Doctor/Nurse" });
        } else {
          return res.json({ Status: "Public" });
        }
      }
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

app.post('/bookappointment', (req, res) => {
  const {
    Name,
    email,
    preferredDate,
    phoneNumber,
    startTime,
    endTime,
    reasonForVisit,
    department,
    doctor,
  } = req.body;

  Booking(email, Name, preferredDate, phoneNumber, startTime, endTime, reasonForVisit, department, doctor, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Database error" });
    }
    else {
      return res.status(200).json({ Status: "Success" })
    }
  })
});

function Booking(email, Name, preferredDate, phoneNumber, startTime, endTime, reasonForVisit, department, doctor, callback) {
  const sql =
    'INSERT INTO appointments (email, name, date, phone, starttime, endtime, visitreason, department, doctor) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';

  connection.query(sql,
    [
      email,
      Name,
      preferredDate,
      phoneNumber,
      startTime,
      endTime,
      reasonForVisit,
      department,
      doctor,
    ], (error, result) => {
      if (error) {
        return callback(error);
      }
      callback(null, result);
    });
}

app.post('/patientform', (req, res) => {
  const {
    firstName,
    lastName,
    email,
    contactNumber,
    AdmitTime,
    AdmitDate,
    gender,
    paymentMethod,
    hasInsurance,
    insurancePolicy,
    wardNumber,
    amount,
  } = req.body;
  FillPatient(firstName, lastName, email, contactNumber, AdmitTime, AdmitDate, gender, paymentMethod, hasInsurance, insurancePolicy, wardNumber, amount, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Database error" });
    }
    else {
      return res.status(200).json({ Status: "Success" })
    }
  })
});
function FillPatient(firstName, lastName, email, contactNumber, AdmitTime, AdmitDate, gender, paymentMethod, hasInsurance, insurancePolicy, wardNumber, amount, callback) {
  const sql =
    'INSERT INTO patients (firstName,lastName,email,contactNumber,AdmitTime,AdmitDate,gender,paymentMethod,hasInsurance,insurancePolicy,wardNumber,amount) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
  connection.query(sql,
    [
      firstName,
      lastName,
      email,
      contactNumber,
      AdmitTime,
      AdmitDate,
      gender,
      paymentMethod,
      hasInsurance,
      insurancePolicy,
      wardNumber,
      amount,
    ], (error, result) => {
      if (error) {
        return callback(error);
      }
      callback(null, result);
    });
}
module.exports = app;



