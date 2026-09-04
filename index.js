require("dotenv").config();

const express = require("express");

const app = express();

app.use(express.json());

// In-memory "database" for now
let products = [];
let idCounter = 1;

// VALIDATION FUNCTION
const validateProduct = (req, res, next) => {
  const { name, price } = req.body;
  if (!name || !price) {
    return res.status(400).json({ error: "name and price are required" });
  }
  if (typeof price !== 'number' || price <= 0) {
    return res.status(400).json({ error: "price must be a positive number" });
  }
  next();
};

// CREATE: POST /products
app.post('/products', validateProduct, (req, res) => {
  const { name, price, description } = req.body;
  const newProduct = {
    id: idCounter++,
    name,
    price,
    description: description || ""
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// READ: GET /products
app.get('/products', (req, res) => {
  res.status(200).json(products);
});





const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Product Inventory API is running");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});