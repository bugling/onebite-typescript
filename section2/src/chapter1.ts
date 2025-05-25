// number
let num1: number = 123;
let num2: number = -123;
let num3: number = 0.123;
let num4: number = -0.123;
let num5: number = Infinity;
let num6: number = -Infinity;
let num7: number = NaN;

// string
let str1: string = "hello";
let str2: string = 'hello';
let str3: string = `hello`;
let str4: string = `hello ${num1}`;

// boolean
let bool1: boolean = true;
let bool2: boolean = false;

// null
let null1: null = null;

// undefined
let unde1: undefined = undefined;

let numA:number = null;  // 이것도 사용 불가("strictNullChecks": treu로 바꿔야 사용 가능)

let numB: 10 = 10;      // 리터럴 타입      // 리터럴: 값
// numB = 20;           // 10 이외에는 넣은 수 없음

let strA: "hello" = "hello";
//strA = "goodBye";     // 사용 불가 

// let boolA: true = false; // 이렇게 해도 오류 발생    // true만 넣어야 함



// 사용 불가(type 엄격)
// num1 = "hello";
// num1.toUpperCase();
// str1 = 123;
// null1 = 11
// let numA:number = null;      // 이것도 사용 불가("strictNullChecks": false로 바꿔주면 사용 가능)