// Defines the type of some specific objects
interface ShowProps {
  first: string;
  second: string;
}

const newObj: ShowProps = {
  first: "Hello!",
  second: "World!"
};

console.log(newObj);

// Constructs an object type whose property keys are Keys and whose property values are Type. 
// This utility can be used to map the properties of a type to another type.
const ids: Record<number, string> = {
  1: 'A',
  2: 'B',
};

ids[3] = 'C';

// Defines the return types of objects automatically
[1, 2, 3].forEach(element => {console.log(element)});