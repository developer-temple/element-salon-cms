const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('Products Response');
})

module.exports = router;