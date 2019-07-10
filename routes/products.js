const express = require('express');
const router = express.Router();

const Product = require('../models/product');

// get all products in database.
// method: GET
// route: /api/products
router.get('/', (req, res, next) => {
  Product.find()
  .then(documents => {
    console.log(documents);
    res.status(200).json({
      message: 'Products fetched successfully!',
      products: documents
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      error: err
    })
  });
})

// add new product to database.
// method: POST
// route: /api/products
router.post('/', (req, res, next) => {
  const product = new Product();
  const values = req.body;

  if (values.name) { product.name = values.name; }
  if (values.description) { product.description = values.description; }
  if (values.imageURL) { product.imageURL = values.imageURL; }
  if (values.costPerUnit) { product.costPerUnit = values.costPerUnit; }
  if (values.pricePerUnit) { product.pricePerUnit = values.pricePerUnit; }
  if (values.currentCount) { product.currentCount = values.currentCount; }
  if (values.parCount) { product.parCount = values.parCount; }
  
  product.save()
  .then(result => {
    console.log(result);
    res.status(201).json({
      message: 'Product added successfully.',
      id: result._id
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      error: err
    })
  });
})

module.exports = router;