const express = require("express");
const router = express.Router();

const USERNAME = "fuji";
const PASSWORD = "fuji@1234";

// Login
router.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username === USERNAME && password === PASSWORD) {
    req.session.authenticated = true;
    res.json({ success: true });
  } else {
    res.status(401).json({ success: false, message: "Invalid credentials" });
  }
});

// Logout
router.post("/logout", (req, res) => {
  req.session.destroy(() => {
    res.json({ success: true });
  });
});

// Check session
router.get("/check", (req, res) => {
  res.json({ authenticated: !!req.session.authenticated });
});

module.exports = router;
