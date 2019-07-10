const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  imageURL: { type: String, default: 'https://via.placeholder.com/150' },
  costPerUnit: { type: Number, required: true },
  pricePerUnit: { type: Number, required: true },
  currentCount: { type: Number, required: true },
  parCount: { type: Number, required: true }
})

module.exports = mongoose.model('Product', productSchema);
