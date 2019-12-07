const sqlite3 = require('sqlite3').verbose();
 
// open the database
let db = new sqlite3.Database('./flowers2019.db', sqlite3.OPEN_READWRITE, (err) => {
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
});