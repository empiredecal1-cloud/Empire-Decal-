const express = require("express");
const cors = require("cors");
require("dotenv").config();
console.log("API KEY:", process.env.OPENAI_API_KEY);
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// TEST ROUTE
app.get("/", (req, res) => {
  res.send("✅ Empire Backend is Running");
});

// MOCKUP ROUTE (safe placeholder)
app.post("/mockup", async (req, res) => {
  try {
    console.log("📩 Mockup request:", req.body);

    res.json({
      imageUrl: "https://via.placeholder.com/512?text=Mockup+Working"
    });

  } catch (error) {
    console.error("❌ Mockup error:", error);
    res.status(500).json({ error: "Mockup failed" });
  }
});

// CHAT ROUTE
app.post("/chat", async (req, res) => {
  try {
    console.log("💬 Chat request:", req.body);

    res.json({
      reply: "Chat is connected ✅"
    });

  } catch (error) {
    console.error("❌ Chat error:", error);
    res.status(500).json({ error: "Chat failed" });
  }
});

// START SERVER
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});