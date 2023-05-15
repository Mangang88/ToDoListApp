const todoList = [];

function renderTodoList() {
  let todoListHTML = '';
for (let i = 0; i < todoList.length; i++) {
 const todo = todoList[i];
 const html = `


  <div>${todo.name}</div>
  <div>${todo.date}</div>
  <button onclick="
  todoList.splice(${i},1);
  renderTodoList();
  "class="delete-button">Delete</button>

`;
 todoListHTML += html;
}
console.log(todoListHTML);
document.querySelector('.js-todo-list')
   .innerHTML = todoListHTML;
 
}      

function addTodo() {
  const nameInputElement = document.querySelector('.js-name-input')
  const name = nameInputElement.value;
  const dateInputElement = document.querySelector('.js-date-input')
  const date = dateInputElement.value;

  todoList.push({name:name, date:date});
  console.log(todoList);

  nameInputElement.value = '';
  dateInputElement.value = '';
  renderTodoList();

}