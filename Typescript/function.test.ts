import addNumbers, { addStrings, arrayMutate, createAdder, fetchData, getName, showParams } from "./function";

console.log(addNumbers(100, 1));
console.log(addStrings("hello", "world"));
console.log(showParams(10, "hello"));
console.log(showParams(10, 30));
console.log(getName({ first: "Kevin", last: "Choi" }));
console.log(arrayMutate([1, 2, 3], (v) => v * 10));

const func1 = createAdder(10);
const func2 = func1(20);
console.log(func2);