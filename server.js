import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import chatRoute from "./routes/chat.js";

dotenv.config();

const app = express();

// ✅ BULLETPROOF CORS FIX (this will 100% solve your error)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  next();
});

app.use(express.json());

// ✅ ROUTES
app.use("/chat", chatRoute);

// ✅ TEST ROUTE
app.get("/", (req, res) => {
  res.send("Server is running");
});

// ✅ IMPORTANT: use dynamic port for Render
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});