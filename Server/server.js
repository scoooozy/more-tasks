const db = require("./firebase");

global.db = db;
const express = require("express");
const app = express();
const cors = require("cors");
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World! I hate this database");
});
app.get("/task", async (req, res) => {
  let collection = db.collection("tasks");
  let qSnapshot = await collection.get();
  let docs = qSnapshot.docs;
  let tasks = docs.map((doc) => ({
    id: doc.id,
    name: doc.data().name,
    task: doc.data().task,
    description: doc.data().description,
    department: doc.data().department
  }));
  return res.status(200).send(tasks)
});
// app.post("/", (req, res) => {
//   let id = randomUUID();
//   console.log(id);
//   db.set(`task${id}`, req.body);
//   res.send("success!!");
// });
// app.delete("/task", (req, res) => {
//   let { id } = req.body;
//   db.delete(id);
//   res.send("Task successfully deleted.");
// });
app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
