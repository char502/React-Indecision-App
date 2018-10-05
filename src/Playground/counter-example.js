
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    const retNum = localStorage.getItem('key');
    const count = parseInt(retNum, 10)

    if (!isNaN(count)) {
      this.setState(() => ({ count }));
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) { // only do something if these are different - better as saving unnecessary writes esp if is a database
      localStorage.setItem('key', this.state.count);
    }

  }

  handleAddOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1 //(these values are UPDATING the state object they are not replacing it)
      };
    });
  }
  handleMinusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      };
    })
  }
  handleReset() {
    this.setState(() => {
      return {
        count: 0
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}
// count: (values want to change and those want to define)
// prevState is your state object BEFORE your chages have been applied
// prevState.count (.count gets the current count value from the state object)
// prevState.count + 1 (this then adds 1 to it)
// only need to provide the states that you want to change


const counterApp = document.getElementById('app');

ReactDOM.render(<Counter />, counterApp);

// let count = 0;
// const addOne = () => {
//   count++;
//   renderCounterApp();
// };
// const minusOne = () => {
//   count--;
//   renderCounterApp();
// };
// const reset = () => {
//   count = 0;
//   renderCounterApp();
// };

// //console.log(templateTwo);

// // in JSX
// // templateTwo is just an onject
// //id - works the same as is html
// //class - has to be renamed as className as class is a reserved word in ES6
// // JSX does not have built in data binding

// const appRoot = document.getElementById("app");

// // const tempTwo = document.getElementById("templateTwo");

// // ReactDOM.render(ttppl, tempTwo);

// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>reset</button>
//     </div>
//   );

//   C.render(templateTwo, appRoot);
// };
// renderCounterApp();
