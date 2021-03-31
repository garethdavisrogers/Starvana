const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Constantine123!@#",
  database: "starvana_ships",
});

db.connect((err, result) => {
  if (err) {
    throw err;
  } else {
    console.log("connected");
  }
});

module.exports = db;
