//functions.ts
function addNumbers(a: number, b: number) : number {
    return a + b;
}

export const addStrings = (a: string, b: string): string => {
  return a + b;
}

export const showParams = (a: number, b: string | number): string => {
  let msg: string = `${a} -> ${b}`;
  return msg;
}

export const fetchData = (url: string): Promise<string> =>
  Promise.resolve(`Data from ${url}`);

export const getName = (userName: { first: string; last: string }): string => {
  return `${userName?.first ?? "first"} , ${userName?.last ?? "last"}`;
}

export function arrayMutate(numbers: number[], mutate: (v: number) => number): number[] {
  return numbers.map(mutate);
}

export type AdderFunction = (val: number) => number;

export function createAdder(num: number): AdderFunction {
  return (val: number) => num + val; 
}

export default addNumbers;