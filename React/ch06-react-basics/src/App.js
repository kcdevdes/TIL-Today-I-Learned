import './App.css';
import React, { Component } from 'react';
import TodaysPlan from './components/TodaysPlan';
import MyComponent from './components/MyComponent';
import BooleanComponent from './components/BooleanComponent';
import StateExample from './components/StateExample';

class App extends Component {
  render() {
    return (
      <div className='body'>
        <TodaysPlan />
        <MyComponent name="Your Ocean" />
        <BooleanComponent board /> {/* This is how to send True value to child components */}
        <StateExample />
      </div>
    );
  }
}

export default App;
