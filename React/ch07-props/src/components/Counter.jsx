import React, { useState } from 'react';
import { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

function Counter() {
  // const [number, setInt] = useState(0);
  const [number, dispatch] = useReducer(reducer, 0);

  const onIncrease = () => {
    // console.log('clickEvent : Increase');
    // setInt((prevNumber) => prevNumber + 1);
    dispatch({ type: 'INCREMENT' });
  };

  const onDecrease = () => {
    // console.log('clickEvent : Decrease');
    // setInt((prevNumber) => prevNumber - 1);
    dispatch({ type: 'DECREMENT' });
  };

  const onCreate = () => {
    console.log('Hello World');
    let a = 1;
    let b = 2;
    console.log(Math.abs(-a));
    console.log(Math.log(b));
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>Increase</button>
      <button onClick={onDecrease}>Decrease</button>
    </div>
  );
}

export default Counter;
