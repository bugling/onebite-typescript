// 배열
let numArr = [1, 2, 3];
let strArr = ["hello", "im", "winterload"];
let boolArr = [true, true, true];
// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr = [1, "hello"];
let doubelrArr = [
    [1, 2, 3],
    [4, 5],
];
// 튜플
// 길이와 타입이 고정된 배열
let tup1 = [1, 2];
// tup1 = [1,2,3];      // 길이가 고정되어 있어서 에러남
// tup1 = ["1", "2"];   // 타입 안 맞아서 에러남
let tup2 = [1, "2", true];
// tup1.push(1);   // 길이가 고정었지만 push(넣기)가 가능  -> 에러 발생(주의 필요!!)
// tup1.pop();
// tup1.pop();
// tup1.pop();
const users = [
    ["이정환", 1],
    ["김수환무", 2],
    ["박명수", 3],
    ["최인곤", 4],
    // [5, "루피"]  // 타입 에러 발생    -> 값의 형태를 고정적으로 받을 수 있음
];
export {};
