import { request, response } from "express";
import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';


export const signup = async (request, response) => {

    const {username, email, password} = request.body;
    const hashedPassword = bcryptjs.hashSync(password, 10)
    const newUser = new User({username, email, password:hashedPassword});
    try {
        await newUser.save();
        response.status(201).json("User created successfully");
    } catch (error) {
        response.status(500).json(error.message);
    }
        
};