const mongoose = require("mongoose");

const connectDataBase = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then((data) => {
      console.log(`database connected ${data.connection.host}`);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDataBase;
