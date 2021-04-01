const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const db = require("../database");

app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("hi");
});

app.get("/ships", (req, res) => {
  let queryStr =
    "SELECT i.id, i.model, i.price, i._description from inventory AS i";
  db.query(queryStr, (err, results) => {
    if (err) {
      throw err;
    } else {
      let currentShips = [];
      results.forEach((result) => {
        let shipObj = {};
        shipObj.id = result.id;
        shipObj.model = result.model;
        shipObj.price = result.price;
        shipObj.description = result._description;
        currentShips.push(shipObj);
      });
      res.send(currentShips);
    }
  });
});

app.listen(port, () => {
  console.log(`The server is listening on port ${port}`);
});
