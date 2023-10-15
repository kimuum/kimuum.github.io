const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".todo-list");

const TODOS_KEY = "todos";
let toDos = [];

//투두리스트 저장
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

//투두리스트 삭제
function deleteToDo(event) {
  const parent = event.target.parentElement;
  parent.remove();
  toDos = toDos.filter((item) => item.id !== parseInt(parent.id));
  saveToDos();
}

//두리스트 화면에 출력
function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const toDoDelBtn = document.createElement("button");
  toDoDelBtn.innerText = "DELETE";
  toDoDelBtn.addEventListener("click", deleteToDo);

  toDoList.appendChild(li);
  li.appendChild(span);
  li.appendChild(toDoDelBtn);
}

//투두리스트 입력 값 전송
function submitToDo(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  paintToDo(newTodoObj);
  toDos.push(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", submitToDo);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(function (item) {
    paintToDo(item);
  });
}
