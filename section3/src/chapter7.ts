/**
 * 타입 좁히기
 * 조건문 등을 이용해 넓은 타입에서 좁은 타입으로
 * 타입을 상황에 따라 좁히는 방법
*/

type Person = {
    name: string;
    age: number;
}

// value => number : toFixed
// value => string : toUpperCase
// value => Date : getTime
// value => Person : name은 age살 입니다.
function func(value: number | string | Date | null | Person) {

    // value.toUpperCase();    // 타입 가드 밖에서는 특정 형태의 메서드 사용 불가능

    if (typeof value === 'number') {        // 타입 가드
        console.log(value.toFixed());
    }
    else if (typeof value === 'string') {
        console.log(value.toUpperCase());
    }
    // else if (typeof value === 'object') {   // 타입 가드에 object를 사용하는 건 위험함
    //console.log(value.getTime());      // value가 Date인 경우는 문제가 없지만, null인 경우는 getTime()을 호출할 수 없기 때문
    //}
    else if (value instanceof Date) {       // instanceof로 대신 사용
        console.log(value.getTime());
    }
    else if (value && "age" in value) {
        console.log(`${value.name}은 ${value.age}살 입니다.`);
    }
}