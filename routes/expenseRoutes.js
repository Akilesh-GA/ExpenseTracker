import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
import Expense from "../models/expenseModel.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = "./uploads";
    if (!fs.existsSync(dir)) fs.mkdirSync(dir);
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

router.post("/", upload.single("billImage"), async (req, res) => {
  try {
    const expense = new Expense({
      title: req.body.title || "Bill Upload",
      amount: req.body.amount || 0,
      category: req.body.category || "Other",
      date: req.body.date || new Date().toISOString().split("T")[0],
      description: req.body.description || "",
      billImage: req.file ? req.file.filename : null,
    });
    await expense.save();
    res.status(201).json(expense);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
