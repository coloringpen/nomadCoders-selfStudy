const $todoForm = document.querySelector('form');
const $todoInput = document.querySelector('input');
const $todoList = document.querySelector('ul');
const todosArray = [];
// 1) todo를 입력하면 그려진다
// 2) 그린 것들이 새로고침을 해도 남아있도록 입력한 내용을 local storage에 저장한다
//      -- local storage는 항상 텍스트만 저장할 수 있음을 기억하다
//      -- local storage에 저장할 때 배열을 문자열로 변형 & 빼올 때 다시 문자열을 배열로 변경

function saveTodos(oneTodo) {
  // localStorage.setItem('todolist', JSON.stringify(oneTodo));
  // 매번 반복될때마다 항상 해당 키의 밸류가 리셋되므로, 밸류에 데이터를 하나만 담을 수 있으면
  // 입력할 때마다 이전의 내용은 사라짐.
  // 그러므로 리셋이 되어도 이전의 내용들까지 담을 수 있도록
  // 밸류 내용을 전역 변수로 빼고 '여러정보를 담을 수 있는' 값으로 설정하여 같은 키 아래
  // 요소를 계속 추가할 수 있게하기. 그리고 밸류값에 추가된 내용으로 리셋할 수 있게 하기
  todosArray.push(oneTodo);
  localStorage.setItem('todolist', JSON.stringify(todosArray));
  // const todosArray = []; 전역변수로 빈 배열을 만들어둘 경우, 새브라우저 세션을 열때마다
  // 예전에 저장한 local storage의 내용이 없어지고, 새로 추가한 요소들만 남음
  // 왜냐면, 브라우저 세션을 시작할 때마다 마련되는 빈 배열 안에 local storage의 내용이 없기 때문
  // 그래서 새 세션부터는 local storage 키에 덮어씌우는 값에 이전의 값들이 없어짐
  // 그러므로 새 세션을 시작할 때 local storage에 내용이 있다면 배열에 내려받는 것부터 시작해야함
}

function addTodo(e) {
  e.preventDefault();
  const oneTodo = $todoInput.value;
  const newHTML = `<li>
      <span>${oneTodo}</span>
      <buttion>delete!</button>
     </li>`;
  $todoList.insertAdjacentHTML('beforeend', newHTML);
  saveTodos(oneTodo);
  $todoInput.value = '';
}

// $todoInput.addEventListener('submit', addTodo);
$todoForm.addEventListener('submit', addTodo); // only form tags take submit event!!

// 삭제를 할 때, 클릭한 엘리먼트가 몇번째 엘리먼트인지를 세어서
// 저장된 배열을 불러와서 해당 번째의 요소를 지우고 새로 쓰기
