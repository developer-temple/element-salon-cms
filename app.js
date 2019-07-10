const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const logger = require('morgan');

const contactRoutes = require('./routes/contact');
const contentRoutes = require('./routes/content');
const productsRoutes = require('./routes/products');
const servicesRoutes = require('./routes/services');

const app = express();

mongoose.connect(`mongodb+srv://developer-temple:y3NMhWUcBjlLb969@elementsaloncmscluster-ny7zi.mongodb.net/element-salon?retryWrites=true&w=majority`, { useNewUrlParser: true })
.then(() => {
  console.log('Connected to database.');
})
.catch(() => {
  console.error('Database connection failed');
})

app.use(logger('dev'));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
  next();
})

app.use(bodyParser.json());

app.use('/api/contact', contactRoutes);
app.use('/api/content', contentRoutes);
app.use('/api/products', productsRoutes);
app.use('/api/services', servicesRoutes);

module.exports = app;
