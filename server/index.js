const express = require("express");
const app = express();
const session = require("express-session");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));

app.use(express.json());
app.use(session({
  secret: "fuji-secret",
  resave: false,
  saveUninitialized: true,
}));

// ✅ This is the key line you're probably missing:
const authRoutes = require("./routes/auth");
app.use("/api", authRoutes);

// Same for products later:
const productRoutes = require("./routes/products");
app.use("/api", productRoutes);

// Static files for uploaded images
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
