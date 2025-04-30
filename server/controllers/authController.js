const User = require("../models/user.model");

exports.register = async (req, res) => {
  const { username, password } = req.body;

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists!" });
    }

    const newUser = new User({ username, password });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username, password });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials!" });
    }

    res.status(200).json({
      message: "Login successful!",
      username: user.username,
      userId: user._id,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
