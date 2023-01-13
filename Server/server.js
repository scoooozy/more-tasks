const DB = require("sigidb");
const db = DB("db.sqlite");
global.db = db;
import { memberName } from "../src/components/UserForm/UserForm";

class Person{
  constructor(fullName,branch,leader){
    this.fullName = fullName
    this.branch = branch;
    this.leader = leader;
  }

}
let newPerson = new Person(memberName, "Build", false)
//console.log(newPerson)
db.set("person2", newPerson)
// db.set("test", "hey");
console.log('====================================');
console.log(db.all());
console.log('====================================');


// let task = {
//   branch: "",
//   description:"",
//   members:[""],
// }

// db.set("tasks",task)

