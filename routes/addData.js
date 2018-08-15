var express = require('express');
var router = express.Router();
var db = require('./../db/mysql');
var async = require('async');
var moment = require('moment');

/* GET users listing. */
router.post('/addArticle', function(req, res, next) {
    var title = req.body.title;
    var content = req.body.content;
    var author = 'ricky';
    var sendTime = moment().format('YYYY-MM-DD hh:mm:ss');
    var type = req.body.type;
    var mainPic = req.body.mainPic;
    var mainText = req.body.mainText;
    var like = 0;
    //console.log(title,content,author,sendTime,type,mainPic,mainText,like);
    db.query('insert into article value(?,?,?,?,?,?,?,?,?)', [null,title,content,author,sendTime,like,type,mainPic,mainText],function(results,fields){
        if(results.code == 500){
            res.json(results);
        }else{
            res.json({code:200,data:results});
        }
    });
    //res.send('respond with a resource');
});

module.exports = router;