var express = require('express');
var router = express.Router();
var db = require('./../../db/mysql');
var async = require('async');
var moment = require('moment');

/* GET users listing. */
router.get('/', function(req, res, next) {
    db.query('select * from article', [],function(results,fields){
        res.json({code:200,data:results});
    });
    //res.send('respond with a resource');
});

router.post('/insert', function(req, res, next) {
    var title = req.body.title;
    var content = req.body.content;
    var author = 'ricky';
    var sendTime = moment().format('YYYY-MM-DD hh:mm:ss');
    var type = req.body.type;
    var tags = req.body.tags;
    var classType = req.body.classType;
    //console.log(title,content,author,sendTime,type,mainPic,mainText,like);
    db.query('insert into article value(?,?,?,?,?,?,?,?)', [null,title,content,author,sendTime,type,tags,classType],function(results,fields){
        if(results.code == 500){
            res.json(results);
        }else{
            res.json({code:200,data:results});
        }
    });
});

router.post('/delete', function(req, res, next) {
    var id = req.body.id;
    //console.log(title,content,author,sendTime,type,mainPic,mainText,like);
    db.query('delete from article where id = ?', [id],function(results,fields){
        if(results.code == 500){
            res.json(results);
        }else{
            res.json({code:200,data:results});
        }
    });
});

router.get('/detail', function(req, res, next) {
    var id = req.query.id;
    db.query('select * from article where id = ?', [id],function(results,fields){
        res.json({code:200,data:results});
    });
    //res.send('respond with a resource');
});

module.exports = router;