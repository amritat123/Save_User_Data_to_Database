const connectDataBase = require('./mongoose')


const loader = async()=>{
    await connectDataBase()
}





module.exports = loader