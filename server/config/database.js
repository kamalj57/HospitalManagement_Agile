const mysql = require('mysql2');
const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.join(__dirname, "/config.env") });

const connectDatabase = () => {
    const connection = mysql.createConnection({
        user: process.env.USER,
        host: process.env.HOST,
        password:process.env.PASSWORD,
        database: process.env.SCHEMA,
    });

    connection.connect((err) => {
        if (err) {
            console.error('Error connecting: ' + err.stack);
            return;
        }
        console.log('Connected to DB');
    });

    connection.on('error', (err) => {
        console.error('Database error: ' + err);
    });

    return connection;
};

module.exports = connectDatabase;
