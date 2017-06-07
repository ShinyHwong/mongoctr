//引入模块
const express = require('express');
const mongo = express.Router();
const MongoClient = require('mongodb').MongoClient;

mongo.insert = function (url, collect, data) {
    MongoClient.connect(url, function (err, db) {
        if(!err){
            console.log('连接成功');
            const collection = db.collection(collect);
            collection.insertMany([data], function (err, result) {
                if(!err){
                    console.log(result);
                    console.log('插入数据成功');
                }
                db.close();
            })
        }
        else{
            console.log('连接数据库失败');
        }
    })
};

mongo.update = function (url, collect, id, data, bool) {
    MongoClient.connect(url, function (err, db) {
        if(!err){
            console.log('连接成功');
            const collection = db.collection(collect);
            if (!bool){
                collection.updateMany(id,{$set : data}, function (err, result) {
                    if(!err){
                        console.log(result);
                        console.log('更新数据成功');
                    }
                    db.close();
                })
            } else{
                collection.updateOne(id,{$set : data}, function (err, result) {
                    if(!err){
                        console.log(result);
                        console.log('更新数据成功');
                    }
                    db.close();
                })
            }

        }
        else{
            console.log('连接数据库失败');
        }
    })
};

mongo.delete = function (url, collect, data, bool) {
    MongoClient.connect(url, function (err, db) {
        if(!err){
            console.log('连接成功');
            const collection = db.collection(collect);
            if (!bool){
                collection.deleteMany(data, function (err, result) {
                    if(!err){
                        console.log(result);
                        console.log('删除数据成功');
                    }
                    db.close();
                })
            } else{
                collection.deleteOne(data, function (err, result) {
                    if(!err){
                        console.log(result);
                        console.log('删除数据成功');
                    }
                    db.close();
                })
            }
        }
        else{
            console.log('连接数据库失败');
        }
    })
};

mongo.find = function (url, collect, data, callback) {
    var data = data || {};
    MongoClient.connect(url, function (err, db) {
        if(!err){
            console.log('连接成功');
            const collection = db.collection(collect);
            collection.find(data).toArray(function (err, result) {
                if(!err){
                    console.log(result);
                    console.log('查找数据成功');
                    if (callback){
                        callback(result);
                    }
                }
                db.close();
            })
        }
        else{
            console.log('连接数据库失败');
        }
    })
};
//导出模块
exports = module.exports = mongo;