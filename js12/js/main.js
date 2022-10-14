let name = "Dave";
let counter = 0;
let myLetter;

while (counter <= 3) {
  myLetter = name[counter];
  console.log(myLetter);
  if (counter === 1) {
    counter += 2;
    continue;
  }
  if (myLetter === "v") break;
  counter++
}
console.log(counter);