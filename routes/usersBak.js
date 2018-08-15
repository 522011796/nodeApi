var express = require('express');
var router = express.Router();
var db = require('./../db/mysql');
var async = require('async');

/* GET users listing. */
router.get('/', function(req, res, next) {
    run();
    //res.send('respond with a resource');
});

// 异步1
function async1(fn) {
    //throw new Error('error') //[@1](/user/1) 可捕获的异常
    setTimeout(function () {
        throw new Error('error'); //[@2](/user/2) 异步中的异常 不能捕获,会直接导致应用crash退出
        fn(null, 'Hello '); //[@3](/user/3) 正常
        //fn(Error('error'), 1); //[@4](/user/4) 异常
    }, 100)
}
// 异步2
function async2(fn) {
    //throw Error('error') //[@5](/user/5) 异步中的异常 不能捕获,会直接导致应用crash退出
    setTimeout(function () {
        fn(null, 'World')
        //fn(Error('error'));
    }, 100)
}

function async_error() {
    setTimeout(function(){
        throw new Error("Error");
    },10)
}

function run() {
    try {
        async_error();
    } catch (err) {
        console.log(err);
    }
}

module.exports = router;