import express from 'express';
import mongoose from 'mongoose';
require('dotenv').config();


const app = express();

app.get('/', (req, res) => {
    res.send('Hey there!');
});



mongoose.connect(    
    `${process.env.DB_CONNECTION}`,  { useNewUrlParser: true }).then(
    () => {app.listen(6101, () => console.log("This is the server"));})
    .catch(
        err =>{console.log("Error in connecting to Mongo DB:" + err);
        });

