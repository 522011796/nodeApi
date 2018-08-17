var express = require('express');
var router = express.Router();
var db = require('./../db/mysql');
var async = require('async');

/* GET users listing. */
router.get('/', function(req, res, next) {
    db.query('select * from user where username = ? and password = ?', [req.query.username,req.query.password],function(results,fields){
        if(results.length > 0){
            //设置cookie
            res.cookie('username','admin'); //有效期以毫秒为单位
            res.json({code:200,data:results});
        }else{
            res.json({code:200,data:results});
        }
    });
});

module.exports = router;