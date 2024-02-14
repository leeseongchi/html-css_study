
async function fx1() {
    console.log("fx1 비동기 호출");
    // return 10; -> Promise에서 resolve의 역할
    // throw new Error();
    return 10;
}

async function fx2(num) {
    console.log("fx2 비동기 호출");
    console.log(num + "출력");
}

async function fx3() {
    let arg = 0;
    // fx1().then((result) => {
    //     arg = result;
    //     fx2(arg);
    // });
    
    //  await => 비동기를 동기로 바꿔준다.
    //  return값을 즉시 받아온다.
    //  async 안에서만 사용 가능하다.
    let fx1Result = await fx1(); 
    arg = fx1Result;
    await fx2(arg);

}

function handleSubmitClick2() {
    fx3();
}

function handleSubmitClick() {
    const p1 = new Promise((resolve, reject) => {
        console.log("p1 프로미스 실행");
        // then은 프로미스 실행 뒤에 실행이 된다.
        // resolve(); -> resolve 호출이 되어야 then을 쓸 수 있다.
        // reject(); -> reject 호출이 되어야 catch를 쓸 수 있다.
        reject();
    });

    // then 안에서 동기(순서대로) 처리가 가능하다.
    // then 은 자기 자신을 return 한다.
    p1.then(() => {
        console.log("p1 then 실행");
        return 10;
    }).then((num) => {
        console.log(num);
    }).then(() => {
        console.log("세번째 then");
    }).catch(() => {
        console.log("오류");
    });

    p1

    const p2 = new Promise((resolve, reject) => {
        console.log("p2 프로미스 실행");
    });

    console.log("동기 실행");
}

