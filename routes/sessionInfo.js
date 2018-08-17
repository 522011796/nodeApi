var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    console.log(req.cookies.username);
    res.json({code:200,data:req.cookies.username});
});

module.exports = router;