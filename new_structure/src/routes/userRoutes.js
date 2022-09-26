const express = require("express")
const register = require("../controller/userController")
const multer = require('../Loader/multer');


const route = express.Router()

route.post("/Register", register);
route.post("/profile", multer.upload.single('avatar'), multer.filedata);

module.exports = route;
module.exports= multer;
module.exports = register;