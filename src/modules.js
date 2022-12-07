import { getLocalStorage, mainToggle, setLocalStorage } from './complete.js';
import './style.css';

const divContainer = document.querySelector('.books-container');
const inputDiv = document.querySelector('#title');
const inputSubmit = document.querySelector('#submit');

let todoList = getLocalStorage() || [];

let isEdit = false;
let editId = null;
mainToggle();

setLocalStorage(todoList);
getLocalStorage();

const displayTodo = ({ description, index, completed }) => {
  const divElement = document.createElement('div');
  divElement.className = 'first-item';
  divElement.innerHTML = `
        <div class="item-details">
        <input type="checkbox" name="" value="" class="complete" ${completed ? 'checked' : ''}> <h4 class="item-desription">${description}</h4>
        
        <i class="fa-solid fa-trash-can" id"${index}"></i>
        <div class="button-details">
        <button class="edit" id="${index}">edit</button>
        <button type="button" id="${index}" class="delete">del</button>
        </div>
        </div>
              `;

  return divElement;
};
const editEvents = () => {
  document.querySelectorAll('.edit').forEach((button) => button.addEventListener('click', (e) => {
    e.preventDefault();
    let id;
    if (button.id > 0) {
      id = button.id - 1;
    } else {
      id = 0;
    }

    isEdit = true;
    editId = id;

    inputDiv.value = todoList[id].description;
    inputDiv.focus();
  }));
};

const reassignIndex = (todoList) => {
  todoList.forEach((item, i) => {
    item.index = i + 1;
  });
};

const removeEvents = () => {
  document.querySelectorAll('.delete').forEach((button) => button.addEventListener('click', (e) => {
    e.preventDefault();
    let id;
    if (button.id > 0) {
      id = button.id - 1;
    } else {
      id = 0;
    }

    deleteTask(id); // eslint-disable-line
  }));
};

const deleteTask = (id) => {
  todoList = getLocalStorage();
  const taskToDelete = todoList[id];

  todoList = todoList.filter((item) => item !== taskToDelete);
  reassignIndex(todoList);

  setLocalStorage(todoList);
  divContainer.innerHTML = '';
  todoList.forEach((item) => {
    divContainer.append(displayTodo(item));
  });
  removeEvents();
  editEvents();
};

inputSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  if (inputDiv.value.trim() !== '') {
    if (isEdit === false) {
      const list = {
        description: inputDiv.value,
        completed: false,
        index: todoList.length + 1,
      };

      todoList.push(list);
      setLocalStorage(todoList);
      todoList = getLocalStorage();
      divContainer.innerHTML = '';
      todoList.forEach((item) => {
        divContainer.append(displayTodo(item));
      });
    } else {
      todoList[editId].description = inputDiv.value;
      setLocalStorage(todoList);
      todoList = getLocalStorage();
      divContainer.innerHTML = '';
      todoList.forEach((item) => {
        divContainer.append(displayTodo(item));
      });
      isEdit = false;
    }
    mainToggle();
    inputDiv.value = '';
    removeEvents();
    editEvents();
  }
});

todoList = getLocalStorage();
divContainer.innerHTML = '';
todoList.forEach((item) => {
  divContainer.append(displayTodo(item));
});
mainToggle();
removeEvents();
editEvents();


export {
  displayTodo, editEvents, reassignIndex, removeEvents, deleteTask,
};