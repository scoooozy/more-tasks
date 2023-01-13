const DB = require("sigidb");
const db = DB("db.sqlite");
global.db = db;
// db.set("vincent",{
//   lazy:"true",
//   smart:"true"
// })
console.log(db.get("vincent"))