// void
// void -> 공허 -> 아무 것도 없다 -> 아무 것도 없음을 의미

function func1(): string {      // 문자열을 반환
    return "hello";
}

function func2(): void {        // 아무것도 반환하지 않음
    console.log("hello");
}

function func3(): null {   // null이나 undefined를 반환시키도록 한다면 return문을 꼭 작성해야 함 -> 귀찮음!! -> void 쓰자~
    console.log("hello");
    return null;
}

let a: void;
// a = 1;
// a = "hello";
// a = {};          
a = undefined;      // undefined만 담을 수 있음
// "strictNullCheks": false인 경우는 'a = null' 가능


// never
// never -> 존재하지 않는 || 모순인
// 반환이 불가능한 타입, 정상적이지 않은 상태
function func4(): never {   
    while(true) {}
}

function func5(): never {
    throw new Error();
}

let b: never;
// b = anyVar;      // any타입 변수도 never타입 변수에 담을 수 없음