//user login

let userInfo = document.querySelector("#user_info");
let userDom = document.querySelector("#user");
let links = document.querySelector("#links");
let logoutBtn = document.querySelector("#logout");

let email = localStorage.getItem("email");
if (email) {
  links.remove();
  userInfo.style.display = "flex";
  logoutBtn.style.display = "flex";

  userDom.innerHTML = email;
}

logoutBtn.addEventListener("click", function () {
  localStorage.clear();
  setTimeout(() => {
    window.location = "register.html";
  }, 1500);
});
