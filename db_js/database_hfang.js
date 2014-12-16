



// created by hfang

/*



 */

var express = require('express');
var router = express.Router();
var inspect = require('util').inspect;
var Client = require('mariasql');
var fs = require('fs');
//
///* GET home page. */
//router.get('/', function(req, res) {
//    res.render('gallery', { title: 'gallery',scripts: ['javascripts/script.js']});
//});





exports.hfangdb = function (res, number) {

    // this is the placeholder for database query result
    var output;
    var c = new Client();


    //console.log('SELECT pic_location from pet_pic where pic_id = ' + number);
    c.connect({
        host: '127.0.0.1',
        user: 'hfang',
        password: 'hfang_pw',
        db: 'hfang_db'
    });

    c.on('connect', function () {
        console.log('Client connected');
    })
        .on('error', function (err) {
            console.log('Client error: ' + err);
        })
        .on('close', function (hadError) {
            console.log('Client closed');
        });

    //create query
    c.query('SELECT pic_location from pet_pic where pic_id = ' + number).on('result',
        function (res) {
            res.on('row', function (row) {
                // assign result to variable
                output = row;
            })
                .on('error', function (err) {
                    console.log('result error: ' + inspect(err));
                })
                .on('end', function (info) {
                    console.log('Results' + info);
                });
        })
        .on('end', function () {
            console.log(output);
            res.writeHead(200, {"Content-Type": "text/plain"});
            // create html element and send back to browser
            res.write('<img src="../public/images/' + output["pic_location"] + '" class="galleryimage"/>', "binary");
            res.end();
            console.log("wrote succeed");

        });
    c.end();
};