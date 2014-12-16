/**
 * Created by LinYichen on 12/9/14.
 */

var mysql = require('mysql');

exports.inputData = function(req, res) {
    console.log(req.body);
    console.log(req.files);
    var connection = mysql.createConnection({
        host: '127.0.0.1',
        user: 'yyan',
        password: 'yyan_pw',
        db: 'yyan_db'
    });

    //connection.query('INSERT INTO pet_test (petName, petType) VALUES (?, ?)',[req.body.petName,req.body.petType],function  (err,result) {
    //    if (err) throw err;
    //    res.send("Created "+JSON.stringify(result));
    //});

    //connection.query('INSERT INTO pet_info (pet_name, pet_type, pet_color, pet_age, pet_gender, pet_ownerName, pet_ownerLocation, pet_ownerContactInfo) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',[req.body.petName,req.body.petType, req.body.petColor, req.body.petAge, req.body.selection, req.body.ownername, req.body.ownerLocation. req.body.ownerContactInfo],function  (err,result) {
    //    if (err) throw err;
    //    res.send("Created "+JSON.stringify(result));
    //});

    connection.query('INSERT INTO pet_info (pet_name, pet_type, pet_color, pet_age, pet_gender, pet_ownerName, pet_ownerLocation, pet_ownerContactInfo, pet_pictureURL) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',[req.body.petName,req.body.petType, req.body.petColor, req.body.petAge, req.body.selection, req.body.ownerName, req.body.ownerLocation, req.body.ownerContactInfo, req.files.userPhoto.path],function  (err,result) {
        if (err) throw err;
        res.send("Created "+JSON.stringify(result));
    });
};

