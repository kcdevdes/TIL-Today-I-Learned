import React, { Component } from 'react';

class Counter extends Component {
  // state
  // variable data that you can change
  state = {
    number: 0
  }

  handleIncrease = () => {
    // to change the value in state, you must call this.setState()
    // React automatically reloads when setState() is called
    this.setState(
      ({ number }) => ({
        number: number + 1
      })
    );
  }

  handleDecrease = () => {
    this.setState(
      ({ number }) => ({
        number: number - 1
      })
    );
  }

  render() {
    return (
      <div>
        <h1>Counter</h1>      
        <div>Value : {this.state.number}</div>
        <button onClick={this.handleIncrease}>Increase</button>
        <button onClick={this.handleDecrease}>Decrease</button>
      </div>
    );
  }
}

export default Counter;
