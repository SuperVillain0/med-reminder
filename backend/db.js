const mongoose = require("mongoose");

module.exports = () => {
  const connectionParams = {
    // useNewUrIParser: true,
    useUnifiedTopology: true
  };

  // DB Connection
  try {
    mongoose.connect(process.env.DB_URI, connectionParams);
    console.log("Connected to database successfully");
  } catch (error) {
    console.log(error);
    console.log("Could not connect to the database");
  }
};
