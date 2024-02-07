const arrInput = document.querySelector(".arr-input");
const addInput = document.querySelector(".add-content");

let arrList = [];

    arrInput.onkeydown = (e) => {
        if(e.keyCode === 13) {
            arrInput.textContent = addInput.value;
            console.log(arrInput.value);
            
            addInput.innerHTML = arrInput.value;

            let dataObj = {
                id: 1,
                cotent: arrInput.value
            }

            arrList.push(dataObj);
        }
    }