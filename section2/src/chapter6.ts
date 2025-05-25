// any
// 특정 변수의 타입을 우리가 확실히 모를 때

let anyVar: any = 10;   // any: 어떤 타입이던지 이 변수에 넣을 수 있다.
anyVar = "hello";       // any타입으로 지정되어 있기 때문에 숫자 -> 다른 타입형 으로 값을 넣을 수 ㅣㅆ다.
anyVar = true;
anyVar = {};
anyVar = () => {return true};

anyVar.toUpperCase();   // 특정 타입에 해당하는 내장함수를 사용할 수 있음. 
anyVar.toFixed();

let num: number = 10;
num = anyVar;          // 다른 변수에 값을 할당할 수도 있음      // 타입 검사를 모두 통과    -> 오류 발생 가능성 높음

// unknown
let unknownVar: unknown;
unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

// num = unknownVar;
// unknownVar.toUpperCase();
// unknownVar + unknownVar;     // 모두 사용 불가

// if문으로 unkown의 타입을 확인했을 때만 변수 사용 가능 -> 타입 정제 || 타입 좁히기 -> any보다 안전함
if(typeof unknownVar == "number") {
    num = unknownVar;
}

