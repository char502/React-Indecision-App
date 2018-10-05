// import React from 'react';
// import ReactDOM from 'react-dom';
// A react component is just an ES6 class
// However, in ES6 classes can use an uppercase or lowercase letter to defined the class,
// React however, insists that the class names are UPPERCASED
// (otherwise the components won't render)
// The uppercase letter is how React differentiates between
// a HTML element (i.e. <p> or <div> and a React component)
// -----
// component is a class itself so below, taking header and extending it to a react component
// React components require 1 method (render()) to be defined
// in es6 classes can have no methods defined, with REqct components, you must define render()
// render() - takes no arguments and it returns some jsx
// -----
// The goal is not to define all of the elements in JSX
// The goal is to compose this page using all of the React components we have already created
// To render a REact component, we actually create what looks like a custom HTML element
// Instead of using h1 or div though, the class name is used, so below, will use <Header />
// Then will have a React component getting rendered
// React components are reusable


// const obj = {
//   name: 'Char',
//   getName() {
//     return this.name;
//   }
// };

// const getName = obj.getName;
// // this version doesn't work as the context of 'this' been broken (i.e. it's original binding did not transfer to the 'getName' variable)

// // have to use bind which is a method on a function
// The first argument of bind can be used to set the 'this' context
// so if use obj.getName.bind(obj); it will now work
// could also use it to manually bind it to something else i.e. obj.getName.bind({ name: Andrew });

// there are vaious places in js where lose the this binding and event handlers are of them

// console.log(getName());


// --

// the version below - using obj.getName.bind(obj) will now work
// const obj = {
//   name: 'Char',
//   getName() {
//     return this.name;
//   }
// };

// const getName = obj.getName.bind(obj);

// console.log(getName());