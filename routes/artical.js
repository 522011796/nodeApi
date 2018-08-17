var express = require('express');
var router = express.Router();
var db = require('./../db/mysql');
var async = require('async');

/* GET users listing. */
router.get('/', function(req, res, next) {
    db.query('select * from article where type = ?', [req.query.type],function(results,fields){
        res.json({code:200,data:results});
    });
    //res.send('respond with a resource');
});

router.get('/detail', function(req, res, next) {
    db.query('select * from article where id = ?', [req.query.id],function(results,fields){
        res.json({code:200,data:results});
    });
    //res.send('respond with a resource');
});

module.exports = router;