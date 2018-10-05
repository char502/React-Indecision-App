// a class is like a blueprint
// can also now assign defaults anywhere where use an arguments list
// these can be used in methods, classes, arrow functions, ES5 functions

class Person {
  constructor(name = "Anonymous", age = 0) {
    // new way to define default
    this.name = name; // || 'test' :old way having to use logical 'or' operator;
    this.age = age;
  }
  getGreeting() {
    //return "Hello " + this.name + ", how are you today?";
    return `Hi i am ${this.name}, `;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age); //calls the parent constructor function
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor()) {
      description += ` Their major is ${this.major}.`;
    }
    return description;
  }
}

class Traveller extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  getGreeting() {
    let newGreeting = super.getGreeting();

    if (this.homeLocation) {
      newGreeting += ` I'm visiting from ${this.homeLocation}.`;
    }
    return newGreeting;
  }
}

// '' is a falsy value - it would fail an if condition
// !'' sgows a falsy value and converts it to the boolean 'true'
// !!'Charlotte' can take a truthy value (with text) and convert it to true

// super refers to the parent class

const me = new Student("Charlotte Ellwood", 42, "Compputer Science");
console.log(me.getDescription());

const other = new Student();
console.log(other.getDescription());

const firstTraveller = new Traveller("Thomas Ellwood", 8, "Reading");
console.log(firstTraveller.getGreeting());

const secondTraveller = new Traveller();
console.log(secondTraveller.getGreeting());
