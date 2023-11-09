require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
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

app.listen(3000, () => {
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