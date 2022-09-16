const jwt = require("jsonwebtoken");
const JWT_TOKEN_KEY = 'this is key';


const authentication = async (req, res, next) => {
    try {
        const token = req.headers['x-access-token'];
        if (!token) {
            res.json({message: 'Authentication Failed', status:false });
        }
        else {
            const decode = jwt.verify(token,JWT_TOKEN_KEY, null);
            req.data = decode;
            next();
        }
    }
    catch(error) {
        res.json({ message: error.message, status: false });
    }
};

module.exports = authentication;
