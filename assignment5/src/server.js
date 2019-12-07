const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const app = express();

app.use(express.static("../publc/index.html"));

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
        res.send(row);
      }
    );
  });

  db.close(err => {
    if (err) {
      console.error(err.message);
    }
    console.log("Close the database connection.");
  });
});

app.listen(3000, () => {
  console.log("Server listening on localhost:3000!");
});
