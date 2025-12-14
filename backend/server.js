import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory products array
let products = [];

// Routes
// Add product
app.post('/api/addproducts', (req, res) => {
  const product = req.body;

  if (!product.name || !product.price) {
    return res.status(400).json({ message: "Name and Price are required" });
  }

  product._id = Date.now().toString();
  products.push(product);

  res.json({ message: "Product added successfully", product });
});

// Get all products
app.get('/api/products', (req, res) => {
  const q = req.query.q;
  let filtered = products;

  if (q) {
    filtered = products.filter(p =>
      p.name.toLowerCase().includes(q.toLowerCase()) ||
      p.description.toLowerCase().includes(q.toLowerCase())
    );
  }

  res.json(filtered);
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: 'Internal server error' });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
