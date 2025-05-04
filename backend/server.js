// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/job_applications", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Define schema and model
const applicationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  skills: { type: String },
  jobTitle: { type: String, required: true },
  appliedAt: { type: Date, default: Date.now }
});

const Application = mongoose.model("Application", applicationSchema);

// Routes
app.post("/apply", async (req, res) => {
  const { name, email, phone, skills, jobTitle } = req.body;
  console.log("📨 Received data:", req.body);

  try {
    const newApp = new Application({ name, email, phone, skills, jobTitle });
    await newApp.save();
    console.log("✅ Application saved");
    res.status(201).json({ message: "Application submitted successfully" });
  } catch (error) {
    console.error("❌ Error:", error);
    res.status(500).json({ error: "Failed to submit application" });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
