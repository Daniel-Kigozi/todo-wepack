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

const mainToggle = () => {
  const togle = document.querySelectorAll('.complete');
  togle.forEach((toggleItem, index) => {
    toggleItem.addEventListener('change', () => {
      const todoList = getLocalStorage();
      todoList[index].completed = !todoList[index].completed;
      setLocalStorage(todoList);
    });
  });
};

export { mainToggle, setLocalStorage, getLocalStorage };