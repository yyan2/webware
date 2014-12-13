var inspect = require('util').inspect;
var client = require('mariasql');


sqlQueryFirstPart = "select * from pet_info "
exports.convertQueryToSql = function(req){
    var jsonArray = JSON.parse(JSON.stringify(req.body));
    var queryArray = [];
    var sqlQuery = sqlQueryFirstPart;
    for(var i in jsonArray){
        if(checkForPetAge(i)){
            queryArray.push(petAgeHandler(i, jsonArray[i]));
        } else {
            queryArray.push("" + i + "='" + jsonArray[i] + "'");
        }

    }
    console.log(queryArray);
    if(!queryArray.isEmpty){
        sqlQuery += "where ";
        for(var element in queryArray){
            sqlQuery += queryArray[element];
            //sqlQuery += queryArray[element];
            sqlQuery += " and ";
        }
        sqlQuery = sqlQuery.substr(0, sqlQuery.length - 5);

    }
    sqlQuery += ';';

    return sqlQuery;
}

function checkForPetAge(name){
    if(name != 'pet_age') return false;
    return true;

}
function petAgeHandler(name, value){
    var ageQuery = "";
    if(value.length == 2){
        ageQuery += (name + value);

    } else {
        ageQuery += (name + ' >= ' + value.substr(0, 1));
        ageQuery += " and ";
        ageQuery += (name + ' <= ' + value.substr(2, 1));
    }
    return ageQuery;


}

exports.queryDatabase = function (res, queryString, call_function) {
    var outputRaw = [];
    var c = new client();
    console.log('reach here');
    c.connect({
        host: '127.0.0.1',
        user: 'yyan',
        password: 'yyan_pw',
        db: 'yyan_db'
    });
    console.log('reach here with no problem');
    c.on('connect', function () {
        console.log('Client connected');
    })
        .on('error', function (err) {
            console.log('Client error: ' + err);
        })
        .on('close', function (hadError) {
            console.log('Client closed');
        });

    c.query(queryString)
        .on('result', function(res) {
            res.on('row', function(row) {
                console.log('Result row: ' + inspect(row));
                outputRaw.push(row);
            })
                .on('error', function(err) {
                    console.log('Result error: ' + inspect(err));
                })
                .on('end', function(info) {
                    console.log('Result finished successfully');
                });
        })
        .on('end', function() {
            call_function(res, outputRaw);
        });


    c.end();

}