const mysql = require("mysql");

const db = mysql.createConnection({
  host: "us-cdbr-east-03.cleardb.com",
  user: "bae342caa30bff",
  password: "c2d287b2",
  database: "heroku_d8ca1de55581606",
});

db.connect((err, result) => {
  if (err) {
    throw err;
  } else {
    console.log("connected");
  }
});

module.exports = db;
