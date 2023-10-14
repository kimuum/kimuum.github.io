const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginBtn = loginForm.querySelector("button");
const greeting = document.querySelector("h1");

const HIDDEN = "hidden";
const USERNAME_KEY = "username";

function login() {
  event.preventDefault();
  loginForm.classList.add(HIDDEN);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreeting(username);
}

function paintGreeting(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN);
}

const savedUser = localStorage.getItem(USERNAME_KEY);

if (savedUser === null) {
  loginForm.classList.remove(HIDDEN);
  loginForm.addEventListener("submit", login);
} else {
  paintGreeting(savedUser);
}
