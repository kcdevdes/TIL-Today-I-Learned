import React from 'react';

type GreetingsProps = {
  name: string;
  age?: number;
  skills: 'Javascript' | 'Typescript' | 'React';
};

const Greetings: React.FC<GreetingsProps> = ({ name, age = 10, skills }) => (
  <div>
    <div>Hello, {name}</div>
    <div>I am {age} years old</div>
    <div>I can deal with {skills}</div>
    <div>New Promises</div>
  </div>
);

export default Greetings;
