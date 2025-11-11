let num1: number = 10;
let num2: number = 20;

for (let i = 0; i < 100; i++) {
  console.log('Hello World!');
  console.log(num1 + num2);
}

console.log(num1.toString() + num2.toString());
console.log(num2.toString() + num1.toString());

let i = 0;
while (true) {
  if (i === 100) {
    break;
  }

  i += 1;
  console.log('Current i :' + i);
}
