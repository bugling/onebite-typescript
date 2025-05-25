// enum
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
// enum Role {
//     ADMIN = 0,
//     USER = 1,
//     GUEST = 2,
// }
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 2] = "GUEST";
})(Role || (Role = {}));
var Grade;
(function (Grade) {
    Grade[Grade["BRONZE"] = 10] = "BRONZE";
    Grade[Grade["SILVER"] = 11] = "SILVER";
    Grade[Grade["GOLD"] = 12] = "GOLD";
})(Grade || (Grade = {}));
var Language;
(function (Language) {
    Language["KOREAN"] = "ko";
    Language["ENGLISH"] = "en";
})(Language || (Language = {}));
const user1 = {
    name: "이정현",
    role: Role.ADMIN, // 0 <- 관리자
    Grade: Grade.BRONZE,
    Language: Language.KOREAN,
};
const user2 = {
    name: "홍길동",
    role: Role.USER,
    Grade: Grade.SILVER,
    Language: Language.KOREAN,
};
const user3 = {
    name: "아무개",
    role: Role.GUEST,
    Grade: Grade.GOLD,
    Language: Language.ENGLISH,
};
console.log(user1, user2, user3);
export {};
// { name: '이정현', role: 0, Grade: 10, Language: 'ko' } { name: '홍길동', role: 1, Grade: 11, Language: 'ko' } { name: '아무개', role: 2, Grade: 12, Language: 'en' }
