const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();
const connectDb = require('./config/db');

const authRoutes = require("./routes/auth.Routes");
const eventRoutes = require("./routes/event.Routes");

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/events", eventRoutes); 

// Server

// MongoDb
connectDb()
.catch(()=>{
  console.log("Connection problem");
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
