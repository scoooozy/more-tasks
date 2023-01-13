const DB = require("sigidb");
const db = DB("db.sqlite");
global.db = db;
let members = []
class Person{
  constructor(fullName,branch,leader){
    this.fullName = fullName
    this.branch = branch;
    this.leader = leader;
  }
  get fullName() {
    return 
  }
}
let newPerson = new Person("Paul K.", "Build", false)
function createPerson(fullMame, branch, leader) {
  let me = Object.create(Person)
  me.name = "Sergei"
}
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

