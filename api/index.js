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
