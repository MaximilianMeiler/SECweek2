const equipA = ["baseball", "football", "volleyball"];
const equipB = ["basketball", "golf balls", "tennis balls"];

const clothesA = ["tank tops", "t-shirts", "jerseys"];
const clothesB = ["sweat tops", "sweat pants", "hoodies"];

console.log(equipA[1]);
console.log(clothesB[0]);

const equipAll = [equipA, equipB];
const clothesAll = [clothesA, clothesB];

console.log(equipAll[0][1]);
console.log(clothesAll[1][0]);

const store = [equipAll, clothesAll];

console.log(store[0][0][1]);
console.log(store[1][1][0]);