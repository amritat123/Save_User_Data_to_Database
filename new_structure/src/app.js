const express = require('express')


require("dotenv").config({path:"src/.env"})
const loader = require("../src/Loader/index")
loader()


const app= express();


app.listen(process.env.PORT,()=>{
    console.log(`server is running on port no ${process.env.PORT}`);
})