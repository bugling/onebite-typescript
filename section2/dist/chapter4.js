// 타입 별칭
let user = {
    id: 1,
    name: "이정환",
    nickname: "winterlood",
    birth: "1997.01.01",
    bio: "안녕하세요",
    location: "부천시",
};
let user1 = {
    id: 2,
    name: "부승",
    nickname: "bugling",
    birth: "199.02.06",
    bio: "반갑습니다",
    location: "부산시",
    extra: "extra information",
};
function func() {
}
;
let contryCodes = {
    Korea: "ko",
    UnitedState: "us",
    UnitedKingdom: "uk",
};
let countryNumberCodes = {
    // Korea: 410,
    // UnitedState: 840,
    // UnitedKingdom: 826,      // 내용이 비어있어도 오류가 나지 않음   // 인덱스 시그니처 규칙을 위반하지 않았다고 간주함
    Korea: 410, // Korea 타입은 강제했기 때문에 없으면 오류남
};
export {};
