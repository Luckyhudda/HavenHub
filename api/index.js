require("dotenv").config();
const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const app = express();
app.use(express.json())
// app.use(cors());
const authRouter = require('./routes/authRoutes')

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("connect to MongoDB");
  })
  .catch(() => {
    console.log("error in DB connection");
  });

  // ROUTES....
  app.use("/api/auth", authRouter);

app.listen(2001, () => {
  console.log("server  Started...");
});


app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});