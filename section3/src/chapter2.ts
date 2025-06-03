/**
 * Unknown 타입 - 최상단(전체 집합)
 * **/

function UnknownExam() {
    let a: unknown = 1;
    let b: unknown = "hello";
    let c: unknown = true;
    let d: unknown = null;
    let e: unknown = undefined;         // 다운캐스팅 가능

    let unknownVar: unknown;

    // let num: number = unknownVar;
    // let str: string = unknownVar;
    // let bool: boolean = unknownVar;  // 업캐스팅 불가능
}


/**
 * Never 타입 - 공집합
 * **/

function neverExam() {
    // 이 함수가 어떤 값을 반환하는 것이 불가능함을 뜻함
    function neverFunc(): never {  
        while(true) {}
    }

    // never 타입은 모든 타입의 서브 타입 -> 업캐스팅 가능
    let num: number = neverFunc();
    let str: string = neverFunc();
    let bool: boolean = neverFunc();

    // let never1: never = 10;
    // let never2: never = 'string';    
    // let never3: never = true;        // 다운캐스팅 불가능
}

/**
 * Void 타입
 * **/

function voidExam() {
    // 반환값이 없음을 명시
    function voidFunc(): void {
        console.log("hi");
        //return undefined;       // undefined의 슈퍼타입이므로 리턴 가능
    }

    // undefined의 슈퍼타입
    let voidVar: void = undefined;  // 업캐스팅 가능
}


/**
 * any 타입
 * **/

function anyExam() {        // 모든 타입의 슈퍼타입 && 모든 타입의 서브타입 -> 치트키
    let unknownVar: unknown;
    let anyVar: any;
    let undefinedVar: undefined;

    anyVar = unknownVar;    // 타입 계층도에서는 안된다고 나와있지만 가능
    undefinedVar = anyVar;  // 왠만하면 사용하면 안됨

    // neverVar = anyVar;      // never는 공집합이기 때문에 어떤 타입도 다운캐스팅 불가능
}
