import React, { Component } from 'react';

// Functional Component
// The difference is the absence of state and lifeCycle in Class.
// The initial mount process runs a little faster. Not that fast though. 

const AboutMeInFunc = ({ name })=> {
  return (
    <div>
      Hello! My name is {name}! Nice to meet you!
    </div>
  );
};

export default AboutMeInFunc;
