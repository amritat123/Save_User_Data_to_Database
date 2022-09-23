const jwt = require("jsonwebtoken");
const JWT_TOKEN_KEY = 'this is key';

const Authentication  = async (req , res , next) => {
     try {
        const token = req.headers ['x.access token'];
        if(! token) {
            res.josn ({ meassage: 'Authenctation falied', status: false });
        }
        else { 
            const decode = jwt.verify(token , JWT_TOKEN_KEY,null );
            req.data = decode;
            next();
        }
    }
    catch (error){
        res.josn({meassage : error.meassage , status : false })
    }
}

module.exports = Authentication;