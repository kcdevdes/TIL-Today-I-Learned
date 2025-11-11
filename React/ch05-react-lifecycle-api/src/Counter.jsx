import React, { Component } from 'react';

const Problematic = () => {
  throw (new Error("New Error!"));
};

class Counter extends Component {
  state = {
    number: 0
  }

  // when the component is created
  constructor(props) {
    super(props);
    console.log("constructor called");
  }

  // when the component is shwon up on a user's screen 
  componentDidMount() {
    // deals with external libraries like masonry, D3
    // or external services like fetching API, ajaxing
    console.log("componentDidMount called");
  }

  // when this function returns false, VirtualDom doesn't do randering at all.
  // programmers should call this as there is no need to redraw DOM
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate called');
    // only works when number is the multiple of 5
    if (nextState.number % 5 === 0) return false;
    return true;
  }

  // after render() is called, this function gets the previosur state and props
  // through parameters
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate called");
  }

  // catches errors
  componentDidCatch(error, info) {
    this.setState({
      error: true
    });
  }

  handleIncrease = () => {
    const { number } = this.state;
    this.setState({
      number: number + 1
    });
  }

  handleDecrease = () => {
    const { number } = this.state;
    this.setState({
      number: number - 1 
    });
  }

  handleCreate = () => {
    const { number } = this.state;
    this.setState({
      number: number * 3
    });
  }

  render() {
    if (this.state.error) return (<h1>에러발생!!</h1>)

    return (
      <div>
        <h1>Counter</h1>    
        <div>Result : {this.state.number}</div>
        { this.state.number === 4 && <Problematic />}
        <button onClick={this.handleIncrease}>Increase</button>
        <button onClick={this.handleDecrease}>Decrease</button>
      </div>
    );
  }
}

export default Counter;
