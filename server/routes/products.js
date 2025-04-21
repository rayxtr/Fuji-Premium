const express = require("express");
const fs = require("fs");
const path = require("path");
const multer = require("multer");
const requireAuth = require("../middleware/authMiddleware");

const router = express.Router();

const dataDir = path.join(__dirname, "../data");
const uploadDir = path.join(__dirname, "../uploads");

const storage = multer.diskStorage({
  destination: function (_, __, cb) {
    cb(null, uploadDir);
  },
  filename: function (_, file, cb) {
    const unique = Date.now() + path.extname(file.originalname);
    cb(null, unique);
  }
});
const upload = multer({ storage });

// Get products by type/category
router.get("/:type/:category", (req, res) => {
  const { type, category } = req.params;
  const filePath = path.join(dataDir, type, `${category}.json`);
  if (!fs.existsSync(filePath)) {
    return res.json([]);
  }
  const data = JSON.parse(fs.readFileSync(filePath));
  res.json(data);
});

// Add new product
router.post("/:type/:category", requireAuth, upload.single("image"), (req, res) => {
  const { type, category } = req.params;
  const { name, price, description } = req.body;
  const imageUrl = `/uploads/${req.file.filename}`;

  const filePath = path.join(dataDir, type, `${category}.json`);
  let data = [];

  if (fs.existsSync(filePath)) {
    data = JSON.parse(fs.readFileSync(filePath));
  }

  const newProduct = {
    id: Date.now(),
    name,
    price,
    description,
    image: imageUrl,
  };

  data.push(newProduct);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  res.json({ success: true, product: newProduct });
});

// Delete product
router.delete("/:type/:category/:id", requireAuth, (req, res) => {
  const { type, category, id } = req.params;
  const filePath = path.join(dataDir, type, `${category}.json`);
  let data = [];

  if (fs.existsSync(filePath)) {
    data = JSON.parse(fs.readFileSync(filePath));
  }

  const updated = data.filter(p => p.id != id);
  fs.writeFileSync(filePath, JSON.stringify(updated, null, 2));
  res.json({ success: true });
});

// Edit product
router.put("/:type/:category/:id", requireAuth, upload.single("image"), (req, res) => {
  const { type, category, id } = req.params;
  const { name, price, description } = req.body;
  const filePath = path.join(dataDir, type, `${category}.json`);

  let data = [];
  if (fs.existsSync(filePath)) {
    data = JSON.parse(fs.readFileSync(filePath));
  }

  const index = data.findIndex(p => p.id == id);
  if (index === -1) return res.status(404).json({ message: "Product not found" });

  const product = data[index];
  product.name = name;
  product.price = price;
  product.description = description;
  if (req.file) product.image = `/uploads/${req.file.filename}`;

  data[index] = product;
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  res.json({ success: true, product });
});

module.exports = router;
