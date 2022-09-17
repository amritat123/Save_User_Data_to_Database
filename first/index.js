// main File

const mongoose = require("mongoose");
const express = require('express')
const app = express()
const db = "mongodb+srv://amrita_tiwari:navgurukul%40123@amrita.fz65w3u.mongodb.net/Amrita?retryWrites=true&w=majority";
const userModel = require('./model/user');
const Controller = require('./controller/user');
const auth = require('./middleware/auth')
const userController = require('./controller/user')


app.use(express.json());
// require('./routes/user');
const port = 3000

// Connect mongodb
mongoose
	.connect(
		db,
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
		}
	)
	.then(() => console.log("mongodb connected..."))
	.catch((err) => console.log(err));

app.get('/', (req, res) => {
	res.send('Hello World!')
});

app.post('/signup', userController.Signup)

app.listen(port, () => {
	console.log(`Server started on port ${port}`)
})

