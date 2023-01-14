const DB = require("sigidb");
const db = DB("db.sqlite");

global.db = db;
const express = require('express');
const app = express();
app.use(express.urlencoded({
  extended:true,
}))
app.use(express.json())
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.post("/",(req, res) => {
  db.set("task",req.body)
})
app.listen(8000, () => {
  console.log('Server is running on port 8000');
  console.log(db.get("task"))
});


