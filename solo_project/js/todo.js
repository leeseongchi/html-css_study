function addToDoToList(todoList, ulList, newTodo) {
    // Add new todo to the todo list
    todoList.push(newTodo);

    // Update the UI

}

function handlesubmitButton() {
    const ulList = document.querySelector(".todo-list");
    const todoInput = document.querySelector(".todo-input");
    
    let todoObject = {
        todoId: lastTodoId + 1,
        content: todoInput.value,
    }

    
    ulList.innerHTML += `
    <div>${newTodo.content}</div>
`;

    todoInput.value = ""; // Clear the input field after adding todo

    // Add the new todo to the list and update the UI
    addToDoToList(todoList, ulList, todoObject);

    // Save updated todo list to local storage
    localStorage.setItem("addList", JSON.stringify(todoList));
}

function handlecancleButton() {
    const todoInput = document.querySelector(".todo-input");
    todoInput.value = ""; // Clear the input field
}

// HTML의 버튼에 직접 이벤트 리스너를 추가합니다.
document.querySelector(".submit-button").addEventListener("click", handlesubmitButton);
document.querySelector(".submit-button2").addEventListener("click", handlecancleButton);