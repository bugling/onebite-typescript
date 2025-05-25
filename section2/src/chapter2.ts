// object
// let user: object = {
//     id: 1,
//     name: "이정환",
// };

// user.id      // 위와 같이 정의하면 id를 꺼내 쓸 수 없음

let user: {
    id?: number;         // 프로퍼티의 타입을 모두 정의
    name: string;  
} = {
    id: 1,              // 객체 리터럴 타입
    name: "이정환",
}

user.id;                // 프로퍼티 꺼내 쓸 수 있음

user = {
    // id: 1,           // id? 라고 명시했기 때문에 id가 없어도 됨(optional property) // 대신 number로만 넣을 수 있음
    name: "홍길동",
};

let config: {
    readonly apiKey: string;
} = {
    apiKey: "MY API KEY",
};

// config.apiKey = "hacked";        // readOnly 속성은 바꿀 수 없음