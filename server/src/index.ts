import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import enquiryRouter from "./routes/enquiry";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "";

app.use(cors({ origin: process.env.CLIENT_URL || "*" }));
app.use(express.json());

app.use("/api/enquiry", enquiryRouter);

app.get("/health", (_req, res) => {
  res.json({ status: "OK", timestamp: new Date().toISOString() });
});

const startServer = async () => {
  if (MONGO_URI) {
    try {
      await mongoose.connect(MONGO_URI);
      console.log("MongoDB connected");
    } catch (err) {
      console.warn("MongoDB connection failed, running without DB:", err);
    }
  } else {
    console.log("No MONGO_URI provided, skipping DB connection");
  }

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
};

startServer();