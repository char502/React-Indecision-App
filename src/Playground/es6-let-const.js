var nameVar = "Charlotte";
nameVar = "Mike";
console.log("nameVar", nameVar);

let nameLet = "Jen";
nameLet = "Julie";
console.log("nameLet", nameLet);

const nameConst = "Frank";
console.log("nameConst", nameConst);

// function getPetName() {
//   var petName = "Hal";
//   return petName;
// }

// getPetName();
// console.log(petName);

// Block scoping

var fullName = "Charlotte Ellwood";

if (fullName) {
  var firstName = fullName.split(" ")[0];
  console.log(firstName); // Charlotte
}

// var is function scoped (if statement not a function so can be accessed outside the if statement as shown by the console log below)
console.log(firstName); // Charlotte

// let and const are block scoped which includes functions - but also if and for statements as well etc

var otherName = "Jen Mead";
// let newName;

if (otherName) {
  let newName = otherName.split(" ")[0];
  console.log(newName); // Jen
}

// var is function scoped (if statement not a function so can be accessed outside the if statement as shown by the console log below)
console.log(newName); // not defined,
//cannot access the variables outside the blocks they were defined in
