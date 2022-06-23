
const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql2');
app.use(cors());
const bodyParser = require('body-parser');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'cdac',
    database: 'Wpt',
	port:3306
});






app.use(express.static('abc'));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/update' , function(req,res){

	let bookid =parseInt(req.query.id);
	let bookname =req.query.name;
	let bookprice =parseInt(req.query.id);


	console.log(bookid, typeof bookid);
	console.log(bookname, typeof bookname);
	console.log(bookprice, typeof bookprice);

	sql = 'update book set bookname=?, bookprice =? where bookid=?';
	connection.query(sql,[bookname,bookprice ,bookid],(err,result)=>{
		if (err){
			console.log('Data is not updated in data base',+err);
		} else{
			if (result.affectedRows > 0){
				console.log('succefully data get updated'+ result.status);

			}
		}
		
	});
	res.send();
});
//whether you want nested objects support  or not



// var result;

// app.post('/poc1', function (req, res) {
	
// 		console.log("reading input " + req.body.v1 +  "  second " + req.body.v2)
		
//     	var xyz ={ v1:37, v2:35};
//         res.send(xyz);
//     });


// app.get('/poc2', function (req, res) {
    
	
//         console.log("reading input " + req.query.xyz);
		
//     	var xyz ={ v1:37, v2:35};

// 		res.send(xyz);

// 		});




app.listen(8081, function () {
    console.log("server listening at port 8081...");
});