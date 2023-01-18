const DB = require("sigidb");
const { randomUUID } = require('crypto'); 
const db = DB("db.sqlite");

global.db = db;
const express = require('express');
const app = express();
app.use(express.urlencoded({
  extended:true,
}))
app.use(express.json())
app.get('/', (req, res) => {
  res.send('Hello World! I hate this database');
});
app.get("/task", (req,res) => {
  res.send(db.all(item => item.id.startsWith("task")))
})
app.post("/",(req, res) => {
  let id = randomUUID();
  db.set(`task${id}`,req.body)
})
app.listen(8000, () => {
  console.log('Server is running on port 8000');
  console.log(db.all(item => item.id.startsWith("task")))
});


