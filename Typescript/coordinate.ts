export interface Coordinate {
  x: number;
  y: number;
}

export function parseCoordinate(obj: Object): Coordinate;
export function parseCoordinate(x: number, y: number): Coordinate;
export function parseCoordinate(str: string): Coordinate;
// unknown 타입
// any와 동일하나, 꼭 타입 캐스팅을 통하여 다른 타입으로 변환할 것을 표기하는 타입
// Optional(?)을 통하여 인자가 1인 상황과 2인 상황을 모두 포괄하도록 만듦
// 모든 오버로딩은 해당 함수에서 발생하게 됨.
export function parseCoordinate(arg1: unknown, arg2?: unknown): Coordinate {
  let coord: Coordinate = {
    x: 0,
    y: 0,
  };

  if (typeof arg1 === 'object') {
    coord = {
      ...(arg1 as Coordinate) // unknown 타입의 Coordinate 캐스팅
    };
  } else if (typeof arg1 === 'string') {
    (arg1 as string).split(",").forEach((str) => {
      const [key, value] = str.split(":");
      // 암시적 any 요소를 'x' | 'y'로 함으로써 들어갈 수 있는 키의 값이 제한됨
      coord[key as 'x' | 'y'] = parseInt(value, 10); 
    });
  } else {
    coord = {
      x: arg1 as number,
      y: arg2 as number,
    };
  }

  return coord;
}