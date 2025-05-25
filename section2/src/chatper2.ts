// 배열
let numArr: number[] = [1, 2, 3];

let strArr: string[] = ["hello", "im", "winterload"];

let boolArr: Array<boolean> = [true, true, true];

// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr: (number | string)[] = [1, "hello"];

let doubelrArr: (number)[][]  = [
    [1,2,3],
    [4,5],
];

// 튜플
// 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];
// tup1 = [1,2,3];      // 길이가 고정되어 있어서 에러남
// tup1 = ["1", "2"];   // 타입 안 맞아서 에러남

let tup2: [number, string, boolean] = [1, "2", true];

tup1.push(1);   // 길이가 고정었지만 push(넣기)가 가능  -> 에러 발생(주의 필요!!)
tup1.pop();
tup1.pop();
tup1.pop();