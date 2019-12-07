const sqlite3 = require("sqlite3").verbose();
const express = require("express"),
  router = express.Router(),
  axios = require("axios");

// open the database
/*let db = new sqlite3.Database('./flowers2019.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the Flowers2019 database.');
});

db.serialize(() => {
  db.each(`SELECT Name as name,
                  Person as person
           FROM SIGHTINGS`, (err, row) => {
    if (err) {
      console.error(err.message);
    }
    console.log(row.name + "\t" + row.person);
  });
});

db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Close the database connection.');
});*/

router.get("/get", (req, res) => {
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

module.exports = router;
