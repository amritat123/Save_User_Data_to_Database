const express = require('express');
const app = express();
const multer = require('multer');

const upload = multer({ 
    storage : multer.diskStorage({
        destination : (req,res ,cb) => {
            cb(null, 'uploads');
        },
        filename: (req, res , cb) => {
            req['filename'] =Math.floor(Math.random()*100000000)+ '.'+file.mimetype.split('/')[1]
            cb(null, req.filename);
        }
    })
})
app.use(express.json);

app.post('/profile', upload.single('avatar'),function(req,res,next ){
    res.status(200).json({ message: 'uploaded' , data : req.filename })
});

const filedata = function (req, res ,next) {
    res.status(200).json({ message: 'uploaded', data: req.filename});
}

module.exports = {upload: upload , filedata:filedata};