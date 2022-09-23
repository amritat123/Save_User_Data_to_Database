const { json } = require('express');
const express = require('express')


require("dotenv").config({path:"src/.env"})
const loader = require("../src/Loader/index")
loader()


const app= express();
app.use(express.json())

const user = require("../src/routes/userRoutes")

app.use("API Runing", user)


app.listen(process.env.PORT,()=>{
    console.log(`server is running on port no ${process.env.PORT}`);
})