let menuTogglers = document.querySelectorAll("._toggle-menu");
let body = document.body;

function toggleMenu() {
  body.classList.toggle("menu-opened");
}

for (let element of menuTogglers) {
  element.addEventListener("click", toggleMenu);
}
