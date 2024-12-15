const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const todoForm = document.querySelector("#todo-form");
const logoutBtn = document.querySelector("#logout-btn");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

onLoginSubmit = (e) => {
  e.preventDefault();
  loginForm.classList.toggle(HIDDEN_CLASSNAME);
  logoutBtn.classList.remove(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);

  paintGreeting(username);
  showTodoForm();
};

const paintGreeting = (username) => {
  greeting.innerText = `Welcome ${username}`;
  greeting.classList.toggle(HIDDEN_CLASSNAME);
};

const showTodoForm = () => {
  todoForm.classList.remove(HIDDEN_CLASSNAME);
};

const handleLogout = () => {
  localStorage.removeItem(USERNAME_KEY);
  logoutBtn.classList.add(HIDDEN_CLASSNAME);
  location.reload();
};
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.toggle(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreeting(savedUsername);
  showTodoForm();
}
logoutBtn.addEventListener("click", handleLogout);
