const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index');
});



//here is an object to put our methods in 
var methods = {
  readTweets: function() {
    return "hello world";
  }

}



module.exports = router;
