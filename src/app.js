
// install -> import -> use

import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));


// class OldSyntax {
//     constructor() {
//         this.name = 'Mike';
//         this.getGreeting = this.getGreeting.bind(this);
//     }
//     getGreeting() {
//         return `Hi. My name is ${this.name}.`;
//     }
// }
// const oldSyntax = new OldSyntax();
// const getGreeting = oldSyntax.getGreeting;
// console.log(getGreeting());

// // -------------------------

// class NewSyntax {
//     name = 'Jen';
//     getGreeting = () => {
//         return `Hi. My name is ${this.name}.`;
//     }
// }
// const newSyntax = new NewSyntax();
// const newGetGreeting = newSyntax.getGreeting;
// console.log(newGetGreeting());




// ===========================================
// For testing/examples
// ===========================================

// install -> import -> use

// import validator from 'validator';

// console.log(validator.isEmail('test@gmail.com'));

// isEmail(str[, options])


//   =======================================
// The Below for testing/training purposes
// =========================================

// import './utils.js';
// import subtract, { square, add } from './utils.js';

// console.log('app.js is running');
// console.log(square(4));
// console.log(add(100, 23));
// console.log(subtract(100, 20))

// import isSenior, { isAdult, canDrink } from './person.js';
// console.log(isAdult(25));
// console.log(canDrink(25));
// console.log(isSenior(64));