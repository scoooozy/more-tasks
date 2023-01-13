const DB = require("sigidb");
const db = DB("db.sqlite");
global.db = db;


class Person{
  constructor(name,branch,leader){
    this.name = ""
    this.branch = "";
    this.leader = false;
  }
}
let newPerson = new Person("Paul K.","Build",false)
db.set("Person", newPerson)


let task = {
  branch:"",
  members:[person],
}

db.set("tasks",task)

db.set()