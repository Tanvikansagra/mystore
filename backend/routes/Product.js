const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const controller = require('../controllers/productController');

/**
 * POST /addproducts
 * body: { name, price, description, image, category }
 */
router.post(
  '/addproducts',
  [
    body('name').not().isEmpty().withMessage('Name is required'),
    body('price').isNumeric().withMessage('Price must be a number')
  ],
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    next();
  },
  controller.addProduct
);

// GET /products?q=searchTerm  (search name + description)
router.get('/products', controller.getProducts);

// GET /product/:id
router.get('/product/:id', controller.getSingleProduct);

module.exports = router;
