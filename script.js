let colorChange = document.querySelectorAll(".colorChange");
let menuList = document.querySelectorAll("#click-menu");
let mainText = document.querySelectorAll(".main-text-menu");

let showMenu = function () {
  for (let i = 0; i < mainText.length; i++) {
    mainText[i].addEventListener("click", function (event) {
      for (j = 0; j < mainText.length; j++) {
        if (i != j) {
          menuList[j].classList.remove("click-menus");
        }
      }
      menuList[i].classList.toggle("click-menus");
      event.preventDefault();
    });
  }
};

let colChange = function () {
  for (let i = 0; i < colorChange.length; i++) {
    colorChange[i].addEventListener("click", function (event) {
      for (j = 0; j < colorChange.length; j++) {
        if (i != j) {
          colorChange[j].classList.remove("active");
        }
      }
      colorChange[i].classList.toggle("active");
    });
  }
};

showMenu();
colChange();
