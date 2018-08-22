var express = require('express');
var router = express.Router();
var db = require('./../db/mysql');
var async = require('async');

/* GET users listing. */
router.get('/', function(req, res, next) {
    var username = req.query.username;
    //res.clearCookie('admin');
    res.cookie('username', 'admin', {maxAge: 0 * 1000});
    res.json({code:200,data:'ok'});
});

module.exports = router;