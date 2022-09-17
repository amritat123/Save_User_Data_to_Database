const express = require('express')
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

const app = express()

app.post('/profile', upload.single('avatar'), function (req, res, next) {
    res.status(200).json({message:'uploaded',data:req.filename})
})

app.listen(3000);
