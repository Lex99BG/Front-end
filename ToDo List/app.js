//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
//Functions
function addTodo(event) {
    //prevent form from submiting
    event.preventDefault();
    //ToDo Div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //Create <li>
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value; 
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    //Check Mark Button
    const complitedButton = document.createElement('button');
    complitedButton.innerHTML = '<i class="fas fa-check"></i>';
    complitedButton.classList.add('complete-btn');
    todoDiv.appendChild(complitedButton);
    //Trash Button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);
    //Append to List
    todoList.appendChild(todoDiv);
    //Clear ToDo Input Value
    todoInput.value = "";
}

function deleteCheck(e) {
    const item = e.target;
    //Delete The ToDo
    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        todo.classList.add("fall");
        todo.addEventListener("transitionend", function() {
            todo.remove();
        })
    }
    if(item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}