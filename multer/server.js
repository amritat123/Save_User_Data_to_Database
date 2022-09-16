const express = require('express')
const multer = require('multer')
const upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, 'uploads')
        },
        filename: (req, file, cb) => {
            cb(null, Math.random() + '.' + file.mimetype.split('/')[1])
        }
    })
})

const app = express()

app.post('/profile', upload.single('avatar'), function (req, res, next) {
    // req.file is the `avatar` file
    res.send('uploaded')
    // req.body will hold the text fields, if there were any
})

app.listen(3000);