const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('Contact Response');
})

module.exports = router;