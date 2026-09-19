const todoList = [
    {name: 'make dinner',
    dueDate: '2026-07-19',
    },
    {name: 'wash dishes',
    dueDate: '2026-07-20'}
    ];

renderToDoList();

function renderToDoList(){
let todoListHTML = '';

for(let i = 0; i < todoList.length; i++){
    const todoObject = todoList[i];
    // const name = todoObject.name;
    // const dueDate = todoObject.dueDate;
    const {name, dueDate} = todoObject;
    
    const html = `
        <div>${name}</div> 
        <div>${dueDate}</div>
        <button onclick="
        todoList.splice(${i}, 1);
        renderToDoList();
         " class="delete-todo-btn">
        Delete
        </button>
       
    `
    todoListHTML+=html;
}



document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}


function addTodo(){
    const inputElement = document.querySelector('.js-name-input');

    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;

    const name = inputElement.value;

    todoList.push({
        // name: name,
        // dueDate: dueDate
        name,
        dueDate,
    });
    

    inputElement.value = '';

    renderToDoList();

}