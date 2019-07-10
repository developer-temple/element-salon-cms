const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const contactRoutes = require('./routes/contact');
const contentRoutes = require('./routes/content');
const productsRoutes = require('./routes/products');
const servicesRoutes = require('./routes/services');

// const Post = require('./models/post');

const app = express();

// mongoose.connect('mongodb+srv://temple:u9puw8a5vwPa0Bd5@cluster0-qcafs.mongodb.net/node-angular?retryWrites=true&w=majority', { useNewUrlParser: true })
// .then(() => {
//   console.log('Connected to database.');
// })
// .catch(() => {
//   console.error('Database connection failed');
// })

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
  next();
})

app.use('/contact', contactRoutes);
app.use('/content', contentRoutes);
app.use('/products', productsRoutes);
app.use('/services', servicesRoutes);

module.exports = app;
