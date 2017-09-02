const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index');
});

/* GET home page. */
router.get('/help', function(req, res, next) {
  res.render('index', { title: 'REEEEEE' });
});

module.exports = router;
