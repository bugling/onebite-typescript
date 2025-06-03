/**
 * 기본 타입간의 호환성
*/
let num1: number = 10;
let num2: 10 = 10;

num1 = num2;            // 업캐스팅 가능

/**
 * 객체 타입간의 호환성
 * -> 어떤 객체타입을 다른 객체타입으로 취급해도 되는가?
*/
type Animal = {         // name, color 타입만 있으면 Animal타입으로 취급됨 (구조적 타입 시스템)
    name: string;
    color: string;
};

type Dog = {            // Animal타입에 있는 속성을 모두 가지고 있으면서 추가적인 속성 존재 (Animal타입으로 호환 가능)
    name: string;
    color: string;
    bread: string;
};

let animal: Animal = {
    name: "기린",
    color: "yellow",
};

let dog: Dog = {
    name: "돌돌이",
    color: "brown",
    bread: "진돗개",    
};

animal = dog;   // 형식은 다르지만 Animal타입이 Dog타입보다 슈퍼 타입으로 취급됨 (업캐스팅 O)
// dog = animal;    // Dog에만 있는 속성이 있기 때문에 Animal->Dog으로 형변환 시키는 것은 불가능 (다운캐스팅 X)

type Book = {
    name: string,
    price: number,
};

type ProgrammingBook = {
    name: string,
    price: number,
    skill: string,
}

let book : Book;
let programmingBook: ProgrammingBook = {
    name: "한 입 크기로 잘라먹는 리액트",
    price: 33000,
    skill: "react.js",
};

/**
 * 초과 프로퍼티 검사
*/
let book2: Book = {
    name: "한 입 크기로 잘라먹는 리액트",
    price: 33000,
    // skill: "react.js",   // Book에 정의되지 않은 속성은 사용 불가능
}

let book3: Book = programmingBook;
book3.name;
book3.price;
// book3.skill;     // 초과 속성 꺼내기 불가능

function func(booK: Book) {}
func({
    name: "한 입 크기로 잘라먹는 리액트",
    price: 33000,
    // skill: "react.js"        // 함수의 인자로 직접 전달 불가능
});
func(programmingBook);      // 서브타입 객체를 인자로 전달하는 건 가능