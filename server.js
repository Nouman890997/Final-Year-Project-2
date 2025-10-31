// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Allow cross-origin requests
app.use(bodyParser.json()); // Parse incoming JSON

// MongoDB connection with increased timeout
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000, // Increase the connection timeout
})
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch(err => console.log("❌ MongoDB connection failed:", err));

// User model (example for registration and login)
const User = mongoose.model("User", new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  cnic: { type: String, unique: true },
  password: String,
  role: String,
}));

// Register Route
app.post("/api/public/register", async (req, res) => {
  try {
    const { name, email, cnic, password, role } = req.body;
    const newUser = new User({ name, email, cnic, password, role });
    await newUser.save();
    res.status(201).json({ message: "Account created successfully!" });
  } catch (err) {
    res.status(500).json({ message: "Error creating account", error: err.message });
  }
});

// Login Route
app.post("/api/public/login", async (req, res) => {
  try {
    const { email, password, role } = req.body;
    const user = await User.findOne({ email, password, role });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    // Return a mock token (you should use JWT in a real app)
    res.status(200).json({ message: "Logged in successfully", token: "fake-jwt-token", user });
  } catch (err) {
    res.status(500).json({ message: "Error logging in", error: err.message });
  }
});

// Start Server
app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});








