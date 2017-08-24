var mysql= require("mysql") ;

var connection;

if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
	connection = mysql.createConnection({
  	port: 3306,
  	host: "localhost",
  	user: "root",
  	password: "1234",
  	database: "burgers_db"
	// connection = mysql.createConnection({
	// 	host: "	uc13jynhmkss3nve.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
	// 	user: "	q00jes3wjnqst8r9",
	// 	password: "uffxfp4509vm3qch",
	// 	database: "burgers_db"
	// });
});
};


// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});




module.exports = connection;