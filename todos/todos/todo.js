const $todoForm = document.querySelector('form');
const $todoInput = document.querySelector('input');
const $todoList = document.querySelector('ul');

function addTodo(e) {
  e.preventDefault();
  const oneTodo = $todoInput.value;
  const newHTML = `<li>
      <span>${oneTodo}</span>
      <buttion>delete!</button>
     </li>`;
  $todoList.insertAdjacentHTML('beforeend', newHTML);
  $todoInput.value = '';
}

// $todoInput.addEventListener('submit', addTodo);
$todoForm.addEventListener('submit', addTodo); // only form tags take submit event!!
