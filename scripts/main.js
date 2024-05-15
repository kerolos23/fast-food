const openBurger = document.querySelector(".burger-icon .open");
const closeBurger = document.querySelector(".burger-icon .close");
const navBar = document.querySelector(".nav-bar");

openBurger.addEventListener("click", () => {
  removeClass(openBurger, "active");
  addClass(closeBurger, "active");
  addClass(navBar, "active");
});

closeBurger.addEventListener("click", () => {
  removeClass(closeBurger, "active");
  removeClass(navBar, "active");
  addClass(openBurger, "active");
});

function addClass(ele, className) {
  ele.classList.add(className);
}

function removeClass(ele, className) {
  ele.classList.remove(className);
}
