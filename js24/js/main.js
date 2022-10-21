import * as Guitars from "./guitars.js";
import User from "./user.js"
const me = new User("maximilianmeiler@ufl.edu", "Maximilian")
console.log(me);
console.log(me.greeting());

console.log(Guitars.default());
console.log(Guitars.shredding());
console.log(Guitars.plucking());