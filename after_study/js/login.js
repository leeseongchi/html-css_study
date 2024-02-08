
window.onload = () => {
    // let obj = {
    //     id: "test",
    //     password: "1234"
    // }
    
    // const userJson = localStorage.getItem("user");
    // const userList = userJson !== null ? JSON.parse(userJson) : new Array();
    
    // userList.push(obj);
    
    // localStorage.setItem("user", JSON.stringify(userList));
    
    const idList = document.querySelector(".id");
    const passwordList = document.querySelector(".password");
    const signButton = document.querySelector(".sign-button");
    
    // signButton.onclick = () => {
    //     if(idList && passwordList === JSON.parse(userJson)) {
    //         alert("로그인 성공");
    //     } else {
    //         alert("로그인 실패");
    //     }
    // }



}

function signButton1(){
    const idList = document.querySelector(".id");
    const passwordList = document.querySelector(".password");

    const userJson = localStorage.getItem("user");
    const userList = userJson !== null ? JSON.parse(userJson) : new Array();

    let checkuser = {
        id: idList.value,
        password: passwordList.value
    }

    for(let list of userList) {
        if(checkuser.id === list.id && checkuser.password === list.password) {
            alert("로그인 성공");
        } else {
            alert("로그인 실패");
        }
        return;
    }
}

function buttonClick() {
    const idList = document.querySelector(".id");
    const passwordList = document.querySelector(".password");

    const userJson = localStorage.getItem("user");
    const userList = userJson !== null ? JSON.parse(userJson) : new Array();

    if(userList[0].id === idList.value && userList[0].password === passwordList.value) {
        alert("로그인 성공");
    } else {
        alert("로그인 실패");
    }

}