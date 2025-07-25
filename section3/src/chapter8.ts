/**
 * 서로소 유니온 타입
 * 교집합이 없는 타입들로만 만든 유니온 타입을 말함
*/

type Admin = {
    tag: "ADMIN";      // 
    name: string;
    kickCount: number;
};

type Member = {
    tag: "MEMBER";
    name: string;
    point: number;
};

type Guest = {
    tag: "GUEST";
    name: string;
    visitCount: number;
};

type User = Admin | Member | Guest;

// Admin -> {name}님 현재까지 {kickCount}명 강퇴헀습니다.
// Member -> {name}님 현재까지 {point}모았습니다.
// Guest -> {name}님 현재까지 {visitCount}번 오셨습니다.
function login(user: User) {

    // 타입을 알아보기 어렵게 코딩한 경우
    if ("kickCount" in user) {
        // admin 타입
        console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
    } else if ("point" in user) {
        // member 타입
        console.log(`${user.name}님 현재까지 ${user.point}모았습니다.`);
    } else {
        // guest 타입
        console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다.`);
    }

    // if문으로 tag를 검사
    if (user.tag === "ADMIN") {
        // admin 타입
        console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
    } else if (user.tag === "MEMBER") {
        // member 타입
        console.log(`${user.name}님 현재까지 ${user.point}모았습니다.`);
    } else {
        // guest 타입
        console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다.`);
    }

    switch (user.tag) {
        case "ADMIN": {
            console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
            break;
        }
        case "MEMBER": {
            console.log(`${user.name}님 현재까지 ${user.point}모았습니다.`);
            break;
        }
        case "GUEST": {
            console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다.`);
            break;
        }
    }

}

/**
 * 복습
*/

// 비동기 작업의 결과를 처리하는 객체

type Loading = {
    state: "LOADING",
};

type Failed = {
    state: "FAILED",
    error: {
        message: "오류가 발생했습니다.",
    }
}

type Success = {
    state: "SUCCESS",
    response: {
        data: "데이터~~",
    },
}

type AsyncTask = Loading | Failed | Success;

// 로딩 중 -> 콘솔에 로딩중 출력
// 실패 -> 실패 : 에러메세지 출력
// 성공 -> 성공 : 데이터 출력
function processResult(task: AsyncTask) {
    switch (task.state) {
        case 'LOADING': {
            console.log("로딩 중");
            break;
        }
        case 'FAILED': {
            console.log(`에러 발생 : ${task.error.message}`);
            break;
        }
        case 'SUCCESS': {
            console.log(`: ${task.response.data}`);
            break;
        }
    }
}

