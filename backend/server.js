require("dotenv").config();
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const Stripe = require("stripe");

const app = express();
app.use(cors());
app.use(express.json());

// Initialize Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// ✅ Root Route (Fix for "Cannot GET /" error)
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// ✅ File Upload Route
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, file.originalname),
});
const upload = multer({ storage });

app.post("/upload", upload.single("file"), (req, res) => {
  res.json({ message: "File uploaded!", file: req.file });
});

// ✅ Checkout Route (Stripe Payments)
app.post("/checkout", async (req, res) => {
  const { amount } = req.body;
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
    });
    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Start Server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
