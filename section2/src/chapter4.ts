// 타입 별칭
let user: {
    id: number;     // 타입을 정의하는 부분이 길고 중복이 발생하면 코드를 읽는 데 어려워짐
    name: string;
    nickname: string;
    birth: string;
    bio: string;
    location: string;
} = {
    id: 1,
    name: "이정환",
    nickname: "winterlood",
    birth: "1997.01.01",
    bio: "안녕하세요",
    location: "부천시",
};

// 타입을 정의해서 재사용하게 함
type User = {
    id: number;     
    name: string;
    nickname: string;
    birth: string;
    bio: string;
    location: string;
    extra: string;
};

let user1: User = {
    id: 2,
    name: "부승",
    nickname: "bugling",
    birth: "199.02.06",
    bio: "반갑습니다",
    location: "부산시",
    extra: "extra information",
};

function func() {
    type User = {};     // 함수 내에서는 밖에서 정의된 타입과 동일한 이름으로 타입 선언 할 수 있음
};

// 인덱스 시그니처
type CountryCodes = {
    [Key: string] : string;     // key와 value의 타입 규칙을 정의함 -> 코드 간결화
};

let contryCodes: CountryCodes = {
    Korea: "ko",
    UnitedState: "us",
    UnitedKingdom: "uk",
};

type CountryNumberCodes = {
    [Key: string] : number;
    Korea: number;
};

type CountryNumberCodes2 = {
    [Key: string] : number;
    // Korea: string;           // 위에 명시된 인덱스 시그니처 규칙을 따르지 않으면 오류
};

let countryNumberCodes: CountryNumberCodes = {
    // Korea: 410,
    // UnitedState: 840,
    // UnitedKingdom: 826,      // 내용이 비어있어도 오류가 나지 않음   // 인덱스 시그니처 규칙을 위반하지 않았다고 간주함

    Korea: 410,     // Korea 타입은 강제했기 때문에 없으면 오류남
};