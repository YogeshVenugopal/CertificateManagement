import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import pool from "./Config/db.js";

dotenv.config();

const app = express();

app.use(cors());

app.listen(process.env.PORT,() => 
    console.log(`The port is running on ${process.env.PORT}`)
)

pool.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.error('Error connecting to the database', err);
    } else {
        console.log('Database connection successful:', res.rows[0]);
    }
});