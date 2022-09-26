
const User = require("../model/userModel");
const multer= require('../Loader/multer');
// const loader = require("../Loader");

const Register = async (req,res) => {
    try {
        const {name,email,password, avatar,phone }= req.body;

        if (!(name && email && phone && avatar && password)) {
            res.status (400).send ('All inputs are required');
        }

        const OldUser= await User.findOne( { name });

        if (OldUser) {
            return res. status (409).send('user already Exits', 'Please login');
        }
        // Create User data base
        const user = new User();
        user.name = name;
        user.email= email;
        user.phone = phone;
        user.avatar = avatar;
        await user .save();
        res.status(204).json(user);
    }
        catch (err)
        {
            console.log(err);
        }
};

module.exports = multer;
module.exports = Register;
