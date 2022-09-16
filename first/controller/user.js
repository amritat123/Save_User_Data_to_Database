const mongoose = require('mongoose');
const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const User = require('../model/user');
const jwt = require('jsonwebtoken');
const JWT_TOKEN_KEY = 'this is key';


app.use(express.json);

// for signup user... 
const Signup = async (req, res) => {

    try {
        const { name, email, phone, avatar, password } = req.body;

        if (!(name && email && phone && avatar)) {
            res.status(400).send('all inputs are required');
        }

        const oldUser = await User.findOne({ name });

        if (oldUser) {
            return res.status(409).send('User already exists! please login ');
        }

        // Encrypt user password
        // encryptPassword = await bcrypt.hash(password, 10);

        // Create user in Database
        const user = new User();
        user.name = name;
        user.email = email;
        user.phone = phone;
        user.avatar = avatar;
        user.password = password;
        await user.save();
        res.status(201).json(user);
    }
    catch (err) {
        console.log(err);
    }
}
module.exports =  { Signup: Signup };