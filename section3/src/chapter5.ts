/**
 * 타입 추론
 */
let a : 10;
let b : "hello";
let c = {
    id: 1,
    name: "배부승",
    profile: {
        nickname: "bugling",
    },
    urls: ["https://wwww.naver.com"],
};

let { id, name, profile } = c;

let [one, two, three] = [1, "hello", true];

function func() {
    return "hello";
}

function func2(message = "hello") {
    return "bye";
}

let d;              // 암묵적 any 타입 -> any 진화
d = 10;
d.toFixed();        // number타입의 내장함수 사용 가능
// d.toUpperCase(); // String타입의 내장함수 사용 불가

d = "string";       // 다시 string타입 데이터 할당
d.toUpperCase();    // string타입 내장함수 사용 가능해짐


const num = 10;
const str = "string";

let arr = [1, "string"];        // arr: (string | number)[]