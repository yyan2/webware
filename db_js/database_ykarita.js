var inspect = require('util').inspect;
var Client = require('mariasql');
function getPetInfo(req, res, query){
var outputArr = []; // this array will hold response from the DB

var c = new Client();

c.connect({
	host: '127.0.0.1',
	user: 'yyan',
	password: 'yyan_pw',
	db: 'yyan_db'
});


c.on('connect', function () { console.log('Client connected'); })
.on('error', function (err) { console.log('Client error: ' + err); })
.on('close', function (hadError) { console.log('Client closed'); });

c.query(query)
// listen for results and see if there is information returned!
	.on('result', function (res) {
		res.on('row', function (row) {
// push the row of data into our array
outputArr.push(row); })
.on('error', function (err) { console.log('Result error: ' + inspect(err)); })
// chain another listener to the results object for ‘error’
.on('end', function (info) { console.log('Results'); });})

.on('end', function () {
console.log('Done with all results');

console.log(outputArr);

res.send(outputArr);
});
c.end();
}
exports.petTypeChart = function(req, res){
getPetInfo(req, res, 'SELECT pet_Type FROM pet_info')
}
exports.petGenderChart = function(req, res){
getPetInfo(req, res, 'SELECT pet_Gender FROM pet_info')
}
exports.petLocationChart = function(req, res){
getPetInfo(req, res, 'SELECT pet_OwnerLocation FROM pet_info')
}
exports.petAgeGraph = function(req, res){
getPetInfo(req, res, 'SELECT pet_Age FROM pet_info')
}
