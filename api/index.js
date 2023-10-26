import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose
.connect(process.env.MONGO)
.then(()=>{
    console.log('connected to MongoDB');
})
.catch((err)=>{
    console.log(err);
});


const app = express();

app.listen(5174, () => {
    console.log('Server is running on local host port 5174!!');
})