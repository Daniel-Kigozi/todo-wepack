

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