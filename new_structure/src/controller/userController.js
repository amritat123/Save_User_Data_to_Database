const User = require("../model/userModel");


exports.register = async(req,res)=>{
    try {
        const {name,email,password}= req.body

        let user = await User.findOne({email})
        if(user){
            res.status(200).json({
                success:true,
                massage: "user already exist"
            })
        }
        res.status(201).json({
            success:true,
            user
        })
        
    } catch (error) {
        res.status(400).json({
            success: false,
            error
        })
    }
}
