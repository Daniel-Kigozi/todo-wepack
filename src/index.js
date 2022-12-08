import { getLocalStorage, mainToggle, setLocalStorage } from './complete.js';
import {
  displayTodo, editEvents, reassignIndex, removeEvents, deleteTask,
} from './modules.js';
import './style.css';

const divContainer = document.querySelector('.books-container');
const inputDiv = document.querySelector('#title');
const inputSubmit = document.querySelector('#submit');

let todoList = getLocalStorage() || [];

let isEdit = false;
const editId = null;
mainToggle();

setLocalStorage(todoList);
getLocalStorage();
displayTodo();

editEvents();

reassignIndex();

removeEvents();

deleteTask();

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

const deleteAllItems = document.querySelector('.clear-data');

deleteAllItems.addEventListener('click', () => {
  todoList = getLocalStorage();
  todoList = todoList.filter((item) => item.completed === false);
  setLocalStorage(todoList);
  divContainer.innerHTML = '';
  todoList.forEach((item) => {
    divContainer.append(displayTodo(item));
  });
  mainToggle();
  removeEvents();
  editEvents();
});
