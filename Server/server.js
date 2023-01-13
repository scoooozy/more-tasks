const DB = require("sigidb");
const db = DB("db.sqlite");
global.db = db;

class Person{
  constructor(name,branch,leader){
    this.name = name
    this.branch = branch;
    this.leader = leader;
  }
}
let newPerson = new Person("Paul K.", "Build", false)
console.log(newPerson)
// db.set("person", newPerson)
// db.set("test", "hey");
console.log('====================================');
console.log(db.get("person"));
console.log('====================================');


// let task = {
//   branch: "",
//   description:"",
//   members:[""],
// }

// db.set("tasks",task)

