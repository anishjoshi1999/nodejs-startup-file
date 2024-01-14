const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
// Load environment variables
dotenv.config();

const PORT = process.env.PORT || 3000;

// Connection to Database

const MONGODB_URI = `${process.env.MONGODB_URI}`;

mongoose.set("strictQuery", false);

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });

    console.log("Connected to MongoDB Atlas");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB Atlas:", err);
  });

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to NodeJS Startup Express Project");
});
