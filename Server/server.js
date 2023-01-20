const DB = require("sigidb");
const { randomUUID } = require('crypto'); 
const db = DB("db.sqlite");

global.db = db;
const express = require('express');
const app = express();
const cors = require('cors')
app.use(express.urlencoded({
  extended:true,
}))
app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
  res.send('Hello World! I hate this database');
});
app.get("/task", (req,res) => {
  let tasks = db.all(item => item.id.startsWith("task"));
  for(let [i, task] of tasks.entries()) {
    tasks[i].value = {...task.value, "id": task.id};
  }
  res.send(tasks.map(item => item.value))
})
app.post("/",(req, res) => {
  let id = randomUUID();
  console.log(id)
  db.set(`task${id}`,req.body)
  res.send("success!!")
})
app.delete("/task", (req,res) => {
  let { id } = req.body;
  db.delete(id);
  res.send("Task successfully deleted.");
  
});
app.listen(8000, () => {
  console.log('Server is running on port 8000');
  console.log(db.all(item => item.id.startsWith("task")))
});


