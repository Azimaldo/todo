import React, { Component } from 'react';
import TaskList from './Task';

import './App.css';

class App extends Component {

    state = {
        term: '',
        items: []
    };

    onChange = (event) => {
        this.setState({ term: event.target.value });
    };

    onSubmit = (event) => {
        event.preventDefault();
        this.setState({
            term: '',
            items: [...this.state.items, this.state.term]
        });
    };


    render() {
        return (
            <div>
            <form className="App" onSubmit={this.onSubmit}>
                <input value={this.state.term} onChange={this.onChange}/>
                <button>Submit</button>
            </form>

            <TaskList items={this.state.items}/>

        </div>
        );
    }
}

export default App;
