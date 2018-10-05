import React from 'react';
import AddOption from './AddOption';
import Action from './Action';
import Header from './Header';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    };
    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    };
    handleClearSelectedOption = () => {
        this.setState(() => ({
            selectedOption: undefined
        }));
    };
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    };
    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({
            selectedOption: option
        }));
    };
    handleAddOption = (option) => {
        if (!option) {
            return 'Please enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'option already exists';
        }
        this.setState((prevState) => ({
            options: prevState.options.concat(option)
        }));
    };
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => ({ options }));
            }
        } catch (e) {
            // Do nothing at all
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }
    render() {
        const subtitle = 'Put your life in the hands of a computer'

        return (
            <div>
                <Header subtitle={subtitle} />
                <div className="container">
                    <Action hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />
                    <div className="widget">
                        <Options
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            /* created a new prop - 'handleDeleteOptions - made it equal to the method just defined (on line 13)
                             - now have access to method,(via the prop name - "handleDeleteOptions") down inside the actual options component
                             - it is accessed inside the actual options component by using 'this.props.handleDeleteOptions'
                             - took the method (as per line 69), passed it down to a child component, and had it called down there, this allows us to reverse the data flow
                             - ie. so instead of just being able to pass stuff into options, we can pass down a function, allowing options to do something in the parent */
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption
                            handleAddOption={this.handleAddOption}
                        />
                    </div>
                </div>
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption}
                />
            </div>
        );
    }
}