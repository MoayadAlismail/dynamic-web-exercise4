const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('about');
});

router.get('/me', (req, res) => {
  res.send('about me page');
});

module.exports = router; 