const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, index: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model("User", userSchema);

// # Environment file (.env)

// - make sure to add this in gitignore

// >>how to access .env code in nodejs. 
// - 'process.env.email'
// - before that you need 'dotenv' package.