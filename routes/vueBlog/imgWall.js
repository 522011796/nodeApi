var express = require('express');
var router = express.Router();
var db = require('./../../db/mysql');
var async = require('async');
var moment = require('moment');

/* GET users listing. */
router.get('/', function(req, res, next) {
    db.query('select * from imgWall limit ?,?', [0,8],function(results,fields){
        res.json({code:200,data:results});
    });
    //res.send('respond with a resource');
});

router.post('/insert', function(req, res, next) {
    var data =  req.body.content.replace("/\r\n/g",'\n');
    var dataImg = data.split("\n");
    var author = 'ricky';
    var sendTime = moment().format('YYYY-MM-DD hh:mm:ss');
    var imgArr = [];
    for(var i=0;i<dataImg.length;i++){
        var arr = [];
        arr.push(null,""+dataImg[i],sendTime,author);
        imgArr.push(arr);
    }
    db.query('insert into imgWall values ?', [imgArr],function(results,fields){
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
    db.query('delete from imgWall where id = ?', [id],function(results,fields){
        if(results.code == 500){
            res.json(results);
        }else{
            res.json({code:200,data:results});
        }
    });
});

router.get('/detail', function(req, res, next) {
    var id = req.query.id;
    db.query('select * from imgWall where id = ?', [id],function(results,fields){
        res.json({code:200,data:results});
    });
    //res.send('respond with a resource');
});

module.exports = router;