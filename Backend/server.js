require("dotenv").config();

// Modules and dependencies
const express = require("express");
const mongoose = require("mongoose");
const Applicants = require("./routes/Applicants");

// App
const app = express();

// MongoDB Connect
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    // Listening for request
    app.listen(process.env.PORT, () => {
      console.log("MongoDB Connected","Listening on port 4000");
    });
  })
  .catch((err) => {
    console.log("Error connecting to database", err);
  });

// Middleware
app.use(express.json())
app.get((req, res, next) => {
  next();
});

// Routes
app.get('/', (req,res) => {
    res.json({mssg: 'Home Page'})
})

app.use("/api/applicants", Applicants);

