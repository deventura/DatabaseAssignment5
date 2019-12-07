const express = require("express");
const path = require("path");
const sqlite3 = require("sqlite3").verbose();
const app = express();
const axios = require("axios");
var bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "../build")));

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

app.get("/", (req, res) => {
  console.log("get request to /");
  // open the database
  let db = new sqlite3.Database(
    "./flowers2019.db",
    sqlite3.OPEN_READWRITE,
    err => {
      if (err) {
        console.error(err.message);
      }
      console.log("Connected to the Flowers2019 database.");
    }
  );

  db.serialize(() => {
    db.each(
      `SELECT Name as name,
                    Person as person
             FROM SIGHTINGS`,
      (err, row) => {
        if (err) {
          console.error(err.message);
        }
        console.log(row.name + "\t" + row.person);
        const rowname = row.name;
      }
    );
  });

  db.close(err => {
    if (err) {
      console.error(err.message);
    }
    console.log("Close the database connection.");
  });

  res.send({ success: true });
});

app.listen(3000, () => {
  console.log("Server listening on localhost:3000!");
});
