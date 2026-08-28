const express = require('express');
const productRoutes = require('./route');
const app = express();
const PORT = 3000;

app.use(express.json()); // to parse JSON body
app.use('/api/products', productRoutes);

app.get('/', (req, res) => res.send("Product Inventory API is running"));

app.listen(PORT, () => console.log('Server running on http://localhost:${PORT}'));