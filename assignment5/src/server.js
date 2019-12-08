// Node.js + Express server backend for petsapp
// version 2 - use SQLite (https://www.sqlite.org/index.html) as a database
//
// COGS121 by Philip Guo
// https://github.com/pgbovine/COGS121

// Prerequisites - first run:
//   npm install
//
// which will look in package.json and install all dependencies
// (e.g., express, sqlite3)
//
// To start the server, run:
//   node server.js
//
// and open the frontend webpage at http://localhost:3000/petsapp.html
//
//
// [optional] you can use nodemon to automatically restart your Node.js
// server whenever your backend files change. https://nodemon.io/
//
// Install globally using:
//
// sudo npm install -g nodemon
//
// and then start the server using:
//   nodemon server.js

const express = require("express");
const app = express();
const path = require("path");
var cors = require("cors");

// use this library to interface with SQLite databases: https://github.com/mapbox/node-sqlite3
const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("./flowers2019.db");
const bodyParser = require("body-parser");

// put all of your static files (e.g., HTML, CSS, JS, JPG) in the static_files/
// sub-directory, and the server will serve them from there. e.g.,:
//
// http://localhost:3000/petsapp.html
// http://localhost:3000/cat.jpg
//
// will send the file static_files/cat.jpg to the user's web browser
//
// Learn more: http://expressjs.com/en/starter/static-files.html
//app.use(express.static('static_files'));
app.use(express.static(path.join(__dirname, "../build")));
/*app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});*/

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true })); // hook up with your app
app.use(bodyParser.json());
// To learn more about server routing:
// Express - Hello world: http://expressjs.com/en/starter/hello-world.html
// Express - basic routing: http://expressjs.com/en/starter/basic-routing.html
// Express - routing: https://expressjs.com/en/guide/routing.html

// GET a list of all usernames
//
// To test, open this URL in your browser:
//   http://localhost:3000/users
app.get("/sightings", (req, res) => {
  // db.all() fetches all results from an SQL query into the 'rows' variable:
  db.all("SELECT DISTINCT Name as name FROM SIGHTINGS", (err, rows) => {
    console.log(rows);
    const allsightings = rows.map(e => e.name);
    console.log(allsightings);
    res.send(allsightings);
  });
});

app.get("/sightings2", (req, res) => {
  // db.all() fetches all results from an SQL query into the 'rows' variable:
  const nameToLookup = req.params.userid; // matches ':userid' above

  // db.all() fetches all results from an SQL query into the 'rows' variable:
  db.all(
    "SELECT * FROM SIGHTINGS WHERE name = 'Death camas' ORDER BY sighted DESC LIMIT 10",
    // parameters to SQL query:
    {
      $name: nameToLookup
    },
    // callback function to run when the query finishes:
    (err, rows) => {
      console.log("test");
      console.log(rows);
      if (rows.length > 0) {
        res.send(rows);
      } else {
        res.send({}); // failed, so return an empty object instead of undefined
      }
    }
  );
});
app.post("/sightings3", (req, res) => {
  // db.all() fetches all results from an SQL query into the 'rows' variable:
  const nameToLookup = req.body.flower; // matches ':userid' above
  console.log("in sightings3", req.body.flower);

  // db.all() fetches all results from an SQL query into the 'rows' variable:
  db.all(
    "SELECT * FROM SIGHTINGS WHERE name = $name ORDER BY sighted DESC LIMIT 10",
    // parameters to SQL query:
    {
      $name: nameToLookup
    },
    // callback function to run when the query finishes:
    (err, rows) => {
      console.log("test");
      console.log(rows);
      if (rows.length > 0) {
        res.send(rows);
      } else {
        res.send({}); // failed, so return an empty object instead of undefined
      }
    }
  );
});
// POST data about a user to insert into the database
// (note that this will insert duplicate entries!)
//
// To test, use the web frontend interface at:
//   http://localhost:3000/petsapp.html
// use this library to parse HTTP POST requests

app.post("/sightings", (req, res) => {
  console.log(req.body);

  db.run(
    "INSERT INTO SIGHTINGS VALUES ($name, $person, $location,$sighted)",
    // parameters to SQL query:
    {
      $name: req.body.name,
      $person: req.body.person,
      $location: req.body.location,
      $sighted: req.body.sighted
    },
    // callback function to run when the query finishes:
    err => {
      if (err) {
        res.send({ message: "error in app.post(/users)" });
      } else {
        res.send({ message: "successfully run app.post(/users)" });
      }
    }
  );
});

// GET profile data for a user
//
// To test, open these URLs in your browser:
//   http://localhost:3000/users/Philip
//   http://localhost:3000/users/Carol
//   http://localhost:3000/users/invalidusername
app.get("/sightings/:userid", (req, res) => {
  const nameToLookup = req.params.userid; // matches ':userid' above

  // db.all() fetches all results from an SQL query into the 'rows' variable:
  db.all(
    "SELECT * FROM SIGHTINGS WHERE name=$name",
    // parameters to SQL query:
    {
      $name: nameToLookup
    },
    // callback function to run when the query finishes:
    (err, rows) => {
      console.log(rows);
      if (rows.length > 0) {
        res.send(rows);
      } else {
        res.send({}); // failed, so return an empty object instead of undefined
      }
    }
  );
});

// start the server at URL: http://localhost:3000/
app.listen(5000, () => {
  console.log("Server started at http://localhost:5000/");
});
