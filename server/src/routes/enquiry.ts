import { Router, Request, Response } from "express";
import Enquiry from "../models/Enquiry";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).json({
      success: false,
      message: "All fields are required: name, email, phone",
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: "Please provide a valid email address",
    });
  }

  const phoneRegex = /^[6-9]\d{9}$/;
  if (!phoneRegex.test(phone.replace(/\s+/g, ""))) {
    return res.status(400).json({
      success: false,
      message: "Please provide a valid 10-digit Indian phone number",
    });
  }

  try {
    const enquiry = new Enquiry({ name, email, phone });
    await enquiry.save();

    return res.status(201).json({
      success: true,
      message: "Enquiry submitted successfully! We will reach out to you soon.",
      data: { id: enquiry._id },
    });
  } catch (error) {
    console.error("DB Error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error. Please try again later.",
    });
  }
});

export default router;