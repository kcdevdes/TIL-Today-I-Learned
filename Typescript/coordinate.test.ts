import { parseCoordinate } from "./coordinate";

/**
 * Overloading Test
 */
console.log(parseCoordinate(1, 2));
console.log(parseCoordinate({ x: 10, y: 20 }));
console.log(parseCoordinate('x:100,y:200'));
