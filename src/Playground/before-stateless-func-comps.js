// This is the parent component
class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        // Allows handleDeleteOptions to be bound to the correct instance
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: [],
        };
    }
    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            }
        });
    }
    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }
    handleAddOption(option) {
        if (!option) {
            return 'Please Enter Value';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'option already exists';
        }
        this.setState((prevState) => {
            return {
                options: prevState.options.concat(option),
            };
        });
    }
    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer'

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                /* created a new prop - 'handleDeleteOptions - made it equal to the method just defined (on line 69)
                 - now have access to method,(via the prop name - "handleDeleteOptions") down inside the actual options component
                 - it is accessed inside the actual options component by using 'this.props.handleDeleteOptions'
                 - took the method (as per line 69), passed it down to a child component, and had it called down there, this allows us to reverse the data flow
                 - ie. so instead of just being able to pass stuff into options, we can pass down a function, allowing options to do something in the parent */
                />
                <AddOption
                    handleAddOption={this.handleAddOption} />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

// this.props is the object


const Action = (props) => {
    return (
        <div>
            <button
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
                What should I do?
      </button>
        </div>
    );
};



class Options extends React.Component {
    // constructor(props) {
    //   super(props);
    //   this.handleRemoveAll = this.handleRemoveAll.bind(this);
    //   // this means this 'this' binding only has to run once when the component first gets initialised
    //   // it does not have to get rebound every time the component renders which is more efficient
    //   // this ensures that whenever we call handleRemoveAll(), the context is correct
    //   // stops having to add multiple bind calls inline

    // }

    render() {
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
                {/* - a component like options cannot change it's own props, new prop VALUES can get passed down from the parent and those will trigger a re-render in the child 
        - is perfectly valid for a parent to pass down new prop values
        - when the parent does pass down new values, the child will re-render */}
                {
                    this.props.options.map((option) => <Option key={option} optionText={option} />)
                }
            </div>
        );
    }
}

// this.props is the method that got passed down from indecisionApp (not the original method on options itself - which has now been commented out)

// render is not an event handler so the 'this' context doesn't lose it's binding

class Option extends React.Component {
    render() {
        return (
            <div>
                Option: {this.props.optionText}
            </div>
        );
    }
}

// class OptionsAll extends React.Component {
//   render() {
//     return <div>Other option comp here</div>;
//   }
// }

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        if (option) {
            e.target.elements.option.value = '';
        }

        this.setState(() => {
            return { error };
        });
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}


// stateless functional components
// - faster than class based components
// const User = (props) => {
//   return (
//     <div>
//       <p>Name: {props.name}</p>
//       <p>Age: </p>
//     </div>
//   )
// }



const view = document.getElementById('app');

ReactDOM.render(<IndecisionApp />, view);
