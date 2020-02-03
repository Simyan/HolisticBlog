import express from 'express';
import mongoose from 'mongoose';
import bodyparser from 'body-parser';
require('dotenv').config();


const app = express();
app.use(bodyparser.json());

app.get('/', (req, res) => {
    res.send('Hey there!');
});

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    next();
});

mongoose.connect(
    `${process.env.DB_CONNECTION}`, { useNewUrlParser: true }).then(
        () => { app.listen(6101, () => console.log("This is the server")); })
    .catch(
        err => {
            console.log("Error in connecting to Mongo DB:" + err);
        });


module.exports = app;