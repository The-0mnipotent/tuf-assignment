const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "banner_db",
});

db.connect((err) => {
  if (err) throw err;
  console.log("MySQL connected...");
});

// Get banner info
app.get("/api/banner", (req, res) => {
  db.query("SELECT * FROM banner_info WHERE id = 1", (err, result) => {
    if (err) throw err;
    res.send(result[0]);
  });
});

// Update banner info
app.post("/api/banner", (req, res) => {
  const { description, timer, link } = req.body;
  db.query(
    "UPDATE banner_info SET description = ?, timer = ?, link = ? WHERE id = 1",
    [description, timer, link],
    (err) => {
      if (err) throw err;
      res.send({ message: "Banner updated successfully" });
    }
  );
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
