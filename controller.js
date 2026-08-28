const { products, currentId } = require('./Product');
let idCounter = currentId;

const getAllProducts = (req, res) => {
  res.status(200).json(products);
};

const getProductById = (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ message: "Product not found" });
  res.status(200).json(product);
};

const createProduct = (req, res) => {
  const { name, price, quantity } = req.body;
  if (!name || price == null || quantity == null) {
    return res.status(400).json({ message: "All fields are required" });
  }
  const newProduct = { id: idCounter++, name, price, quantity };
  products.push(newProduct);
  res.status(201).json(newProduct);
};

const updateProduct = (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ message: "Product not found" });
  
  const { name, price, quantity } = req.body;
  product.name = name ?? product.name;
  product.price = price ?? product.price;
  product.quantity = quantity ?? product.quantity;
  
  res.status(200).json(product);
};

const deleteProduct = (req, res) => {
  const index = products.findIndex(p => p.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: "Product not found" });
  
  products.splice(index, 1);
  res.status(200).json({ message: "Product deleted successfully" });
};

module.exports = { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct };