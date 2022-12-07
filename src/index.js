
import './style.css';
const divContainer = document.querySelector('.books-container');


const TODO = [
    {
    "description": "Collecting shopping items",
    "complete": false,
    "index": 1
    },
    {
        "description": "solving hackerrank problems",
        "complete": false,
        "index": 2
        },
        {
            "description": "Debugging my project",
            "complete": false,
            "index": 3
            },
            {
                "description": "Merging another pull request",
                "complete": false,
                "index": 4
                },
                {
                    "description": "Preparing for interviews",
                    "complete": false,
                    "index": 5
                    }
]

const displayTodo = ({ description, index}) => {
    console.log('todo');
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

  TODO.forEach((item) => {
    divContainer.append(displayTodo(item));
  });

