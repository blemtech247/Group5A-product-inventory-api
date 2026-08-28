const express = require('express');
const router = express.Router();
const { 
  getAllProducts, 
  getProductById, 
  createProduct, 
  updateProduct, 
  deleteProduct 
} = require('./controller');

router.get('/', getAllProducts);        // GET all
router.get('/:id', getProductById);     // GET one
router.post('/', createProduct);        // CREATE
router.put('/:id', updateProduct);      // UPDATE
router.delete('/:id', deleteProduct);   // DELETE

module.exports = router;