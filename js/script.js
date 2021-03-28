const submit = document.querySelector('#submit'); // Кнопка добавить задачу
const toDoName = document.querySelector('#toDoName'); // Input
const todoListWrapper = document.querySelector('.todoList'); // UL задач в HTML 
const deleteAll = document.querySelector('.footer > button'); // Кнопка очистить все в футере
let deleteButtons = document.querySelectorAll('.delete-btn'); // Все кнопки с корзиной (это ебаный масив)
const tasks = document.querySelector('.footer> span') // Кол-во задач

todoList = [];

const addEventToButtons = () =>{ // Создаем функцию
  deleteButtons.forEach((item, id) =>{ // Ебашим цикл прогоняю item и id
    console.log(item);
   item.addEventListener(('click'), () =>{
      console.log(todoList[id])
      deleteItem(id);
    })
  })
};


  const renderTodoList = () =>{
  todoListWrapper.innerHTML = '';
  todoList.forEach((key) => {
    todoListWrapper.innerHTML += `<li>${key.todo}<span class='delete-btn'><i class="fas fa-trash"></i></span></li>`;
  });
  tasks.innerHTML = `У Вас есть ${todoList.length} задач`;
  deleteButtons = document.querySelectorAll('.delete-btn');
  addEventToButtons();
};

const deleteItem = (index) =>{
  todoList = [...todoList.filter((i, id) => id !== index)];
  renderTodoList();
};


submit.addEventListener(('click'), () =>{
  
  todoList = [...todoList, {ID: todoList.length += 1, todo: toDoName.value,  complite: false}];
  toDoName.value = '';
  console.log(todoList);
  renderTodoList();
 
  
});


renderTodoList();

deleteAll.addEventListener("click", () => {
  todoList = [];
  renderTodoList();
});







