/**
 * 타입 단언
 * **/

type Person = {
    name: string,
    age: number;
}

let person = {} as Person;
person.name = "이정환";
person.age = 27;

type Dog = {
    name: string,
    color: string;
}

// 객체 리터럴 사용
let dog = {
    name: "돌돌이",
    color: "brown",
    bread: "진도",   // 초과 프로퍼티 검사하여 원래는 컴파일 에러 발생
} as Dog;            // 타입 단언을 사용하면 초과적으로 프로퍼티를 정의할 수 있음

/**
 * 타입 단언의 규칙
 * 값 as 단언 <- 단언식
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야 함
*/
let num1 = 10 as never;     // 10(number) <--super-- never     // 타입 단언 성공
let num2 = 10 as unknown;   // 10(number) <--sub-- unknown   // 타입 단언 성공

// let num3 = 10 as string;     // 두 형식이 겹치지 않는다는 오류 발생

// 애초에 타입단언은 안전한 문법이 아님
// 그렇게 때문에 두 요소간의 겹치는 부분이 있을 때만 '타입단언'을 허용함 

/**
 * const 단언
*/
let num4 = 10 as const;

let cat = {
    name: "야옹이",
    color: "yellow",
} as const;     // 모든 필드를 readonly로 만듦

// cat.name = "나비";   // 프로퍼티가 const(상수)로 단언되었기 때문에 수정 불가능

/**
 * Non Null 단언
*/
type Post = {
    title: string;
    author?: string;        // 선택적 프로퍼티
}

let post: Post = {
    title: "게시물1",
    author: "이정환",
}

// const len: number = post.author?.length;    // author은 선택적 프로퍼티이므로 undefined를 반환할 수 있음. len을 number로만 정의하면 컴파일 에러 발생
const len: number = post.author!.length;        // 자동으로 생성되는 ?를 지우고 !로 바꾸면 author가 존재한다는 걸 단언하는 효과를 발생시켜 len을 number로만 정의해도 컴파일 에러를 발생시키지 않음.


