// arguments object - no longer bound with arrow functions

// const add = function(a, b) {
//   console.log(arguments);
//   return a + b;
// };

const add = (a, b) => a + b;

console.log(add(55, 1));

// this keyword - no longer bound

// in ES6 your functions no longer bind their own 'this' value, instead they use the 'this' value of the context they were created in

// time 09:50 in this video, really confused re the use of this with arrow functions

//es6 method definition syntax 'printPlacesLived() {}' rather than 'printPlacesLived: function() {}'

const user = {
  name: "Charlotte",
  cities: ["Reading", "Middlesex", "Fareham"],
  printPlacesLived() {
    return this.cities.map(city => this.name + " Has Lived in " + city);
    //   console.log(this.name + " Has Lived in " + cities);

    // this.cities.forEach(cities => {
    //   console.log(this.name + " Has Lived in " + cities);
    // });
    // const that = this;
    // this.cities.forEach(function(cities) {
    //   console.log(that.name + " Has Lived in " + cities);
    // });
  }
};
console.log(user.printPlacesLived());

// console.log(newSt);

// this.cities.forEach(myFunction() {
// });

// function myFunction(item, index) {
//     console.log(this.name + " Has lived in " + item)
// }

// let x = user.cities[x];
// for (x in user.cities) {
//     console.log(this.name + " has lived in " + x);

// Challenge

const multiplier = {
  numbers: [10, 20, 30], // numbers
  multiplyBy: 3,
  multiply() {
    return this.numbers.map(item => item * this.multiplyBy);
  }
};
console.log(multiplier.multiply());
