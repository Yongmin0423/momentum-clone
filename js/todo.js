const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

// 로컬 스토리지에 ToDo 저장
const saveToDos = () => {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
};

// ToDo 삭제
const deleteToDo = (event) => {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
};

// ToDo 생성 및 렌더링
const paintToDo = (newTodo) => {
  const li = document.createElement("li");
  li.id = newTodo.id;
  li.classList.add("list-group-item");

  const div = document.createElement("div");

  // 체크박스 생성
  const checkbox = document.createElement("input");
  checkbox.classList.add("form-check-input", "me-1");
  checkbox.type = "checkbox";
  checkbox.id = `checkbox-${newTodo.id}`;
  checkbox.checked = newTodo.completed || false;

  // 체크박스 변경 이벤트
  checkbox.addEventListener("change", (event) => {
    const todo = toDos.find((toDo) => toDo.id === newTodo.id);
    console.log("tttt", todo);
    todo.completed = event.target.checked;
    saveToDos();
  });

  // 라벨 생성
  const label = document.createElement("label");
  label.classList.add("form-check-label");
  label.setAttribute("for", `checkbox-${newTodo.id}`);
  label.innerText = newTodo.text;

  // 삭제 버튼 생성
  const button = document.createElement("button");
  button.classList.add("btn-close");
  button.addEventListener("click", deleteToDo);

  // li에 요소 추가
  li.appendChild(div);
  div.appendChild(checkbox);
  div.appendChild(label);
  li.appendChild(button);

  // 리스트에 추가
  toDoList.appendChild(li);
};

const handleTodoSubmit = (e) => {
  e.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
    completed: false, // 기본 상태는 완료되지 않음
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
};

// 폼 제출 이벤트 리스너
toDoForm.addEventListener("submit", handleTodoSubmit);

// 저장된 ToDo 불러오기
const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach((newTodo) => paintToDo(newTodo));
}
