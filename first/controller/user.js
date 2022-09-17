const mongoose = require('mongoose');
const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const User = require('../model/user');
const jwt = require('jsonwebtoken');
const JWT_TOKEN_KEY = 'this is key';
const multer = require('multer')


const upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, 'uploads')
        },
        filename: (req, file, cb) => {
            req["filename"]=Math.floor(Math.random() * 100000000) + '.' + file.mimetype.split('/')[1]
            cb(null, req.filename)
        }
    })
})

app.use(express.json);


app.post('/profile', upload.single('avatar'), function (req, res, next) {
    res.status(200).json({message:'uploaded',data:req.filename})
})



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

const filedata = function (req, res, next) {
    res.status(200).json({message:'uploaded',data:req.filename})
}

module.exports =  { Signup: Signup, upload: upload, filedata: filedata };