import './style.css';

const divContainer = document.querySelector('.books-container');
const inputDiv = document.querySelector('#title');
const inputSubmit = document.querySelector('#submit');

let todoList = [];

const setLocalStorage = (todoList) => {
  localStorage.setItem('formInputs', JSON.stringify(todoList));
};

const getLocalStorage = () => {
  if (localStorage.getItem('formInputs') !== null) {
    todoList = JSON.parse(localStorage.getItem('formInputs'));
  } else {
    todoList = [];
  }
  return todoList;
};

const displayTodo = ({ description, index, completed }) => {
  const divElement = document.createElement('div');
  divElement.className = 'first-item';
  divElement.innerHTML = `
          <div class="item-details">
          <input type="checkbox" name="" value="" class="complete"> <h4 class="item-desription">${description}</h4>
          
          <i class="fa-solid fa-trash-can" id"${index}"></i>
          
          </div>
                `;

  return divElement;
};

inputSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  if (inputDiv.value.trim() !== '') {
    
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
    
  }
  }); 
