// const square = function(x) {
//   return x * x;
// };

// console.log(square(10));

// // const squareArrow = q => {
// //   return q * q;
// // };

// // es6 arrow functions are always anonymous
// // do not use explicit returns

// // if only returns a single expression, do not need to use curly braces

// const squareArrow = x => x * x;

// console.log(squareArrow(8));

// let name = "Charlotte Ellwood"

// let firstName;

// const getFirstName = function(name) {
//   return (firstName = name.split(" ")[0]);
// };

// console.log(getFirstName("Charlotte Ellwood"));

// const getFirstName = (name) =>

// let firstName;

// const getFirstName = name => {
//   return name.split(" ")[0];
// };

const getFirstName = name => name.split('')[0];

console.log(getFirstName('Charlotte Ellwood'));
