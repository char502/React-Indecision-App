// import React from 'react';
// import ReactDOM from 'react-dom';

// console.log('App.js is running');

const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: []
};

const onFormSubmit = e => {
  e.preventDefault();

  const option = e.target.elements.option.value;
  // e.target points to the element that the event started on
  // on form target, have access to elements i.e. '.elements'
  // elements contains a list of all the elements and they are indexed by name
  // in this case the 'name' is 'option'
  // On option, have input so here can use 'value' to get the value entered into the text box (on the 'onFormSubmit' form)
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    render();
  }
};
// Single page applications - handling events from inside client side js
// JSX - JavaScript XML

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};

const onRemoveAll = () => {
  app.options = [];
  render();
};

const appRoot = document.getElementById('app');

// const numbers = [55, 101, 1000];

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>Subtitle: {app.subtitle}</p>}

      <p>{app.options.length > 0 ? 'Here are your options' : 'No Options'}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>
        What should I do?
      </button>
      <button onClick={onRemoveAll}>Remove All</button>
      <ol>{app.options.map(option => <li key={option}>{option}</li>)}</ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};
render();
