const userName = document.getElementById("username");
const passWord = document.getElementById("password");
const loginBtn = document.getElementById("login-btn");
const logoutBtn = document.getElementById("logout-btn");
const main = document.getElementById("main");
const inLogged = document.getElementById("inlogged");
const user = "test";
const pass = "1234";
let isLogged = false;

isLogged = localStorage.getItem("islogged");

// login/logout funktioner//

const logIn = () => {
  main.classList.add("login");
  inLogged.classList.add("logout");
  localStorage.setItem("username", user);
  localStorage.setItem("password", pass);
  localStorage.setItem("islogged", "true");
  userName.value = "";
  passWord.value = "";
};

const logOut = () => {
  main.classList.remove("login");
  inLogged.classList.remove("logout");
  localStorage.clear();
};

if (isLogged) {
  logIn();
}
//btn click event listener//
loginBtn.addEventListener("click", () => {
  if (userName.value === user && passWord.value === pass) {
    logIn();
  } else {
    alert("Wrong username or password");
  }
});

logoutBtn.addEventListener("click", () => {
  logOut();
});
