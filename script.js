let colorChange = document.querySelectorAll(".colorChange");
let menuList = document.querySelectorAll("#click-menu");
let mainText = document.querySelectorAll(".main-text-menu");

let transactionList = document.querySelector(".transactions");

let menuToggler = document.querySelector(".wnavigation-scroll");

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

let data = [{
    id: "#SK2540",
    billingName: "Neal Matthews",
    date: "07 Oct, 2019",
    total: "$400",
    status: "Paid",
    paymentMethod: ["Mastercard", `<i class="fab fa-cc-mastercard"></i>`],
  },
  {
    id: "#SK2541",
    billingName: "Jamal Burnett",
    date: "07 Oct, 2019",
    total: "$380",
    status: "Chargeback",
    paymentMethod: ["Visa", `<i class="fab fa-cc-visa"></i>`],
  },
  {
    id: "#SK2542",
    billingName: "Juan Mitchell",
    date: "06 Oct, 2019",
    total: "$384",
    status: "Paid",
    paymentMethod: ["Paypal", `<i class="fab fa-cc-paypal"></i>`],
  },
  {
    id: "#SK2543",
    billingName: "Barry Dick",
    date: "05 Oct, 2019",
    total: "$412",
    status: "Paid",
    paymentMethod: ["Mastercard", `<i class="fab fa-cc-mastercard"></i>`],
  },
  {
    id: "#SK2544",
    billingName: "Ronald Taylor",
    date: "04 Oct, 2019",
    total: "$404",
    status: "Refund",
    paymentMethod: ["Visa", `<i class="fab fa-cc-visa"></i>`],
  },
  {
    id: "#SK2545",
    billingName: "Jacob Hunter",
    date: "04 Oct, 2019",
    total: "$392",
    status: "Paid",
    paymentMethod: ["Paypal", `<i class="fab fa-cc-paypal"></i>`],
  },
];

let list = data.map((item) => {
  return `<div class="transaction-list_item">
  <div class="list-checkbox">
    <input type="checkbox" />
  </div>
  <div class="list-id">${item.id}</div>
  <div class="list-billing">${item.billingName}</div>
  <div class="list-date">${item.date}</div>
  <div class="list-total">${item.total}</div>
  <div class="list-status ${item.status}">${item.status}</div>
  <div class="list-method">${item.paymentMethod[1]}${item.paymentMethod[0]}</div>
  <button class="list-button">View Details</button>
</div>`;
}).join("");

transactionList.insertAdjacentHTML("beforeend", list);



let mainContent = document.querySelector(".main-items");

function menuToggle() {
  mainContent.classList.toggle("menu-change_big");
  mainContent.classList.toggle("menu-change_small");
  document.querySelector(".list-menu").classList.toggle("delete-item");
  document.querySelector(".list-menu-toggler").classList.toggle("delete-item");
  document.querySelector(".body").classList.toggle("scroll-hidden");
  document.querySelector(".white-content").classList.toggle("scroll-auto");
  document.querySelector(".white-navigation").classList.toggle("toggler-position");
  document.querySelector(".black-content").classList.toggle("scrollY");
  document.querySelector(".small-menu-logo").classList.toggle("toggler-menu-helper");
}

menuToggler.addEventListener("click", menuToggle);




let elem = document.querySelector(".body");
let fullscreen = document.querySelector(".button-fulscreen");

function changeFullscreenLogo() {
  document.querySelector(".open-fullscreen").classList.toggle("delete-item");
  document.querySelector(".close-fullscreen").classList.toggle("delete-item");
}


function changeFullScreen() {
  if (document.fullscreenElement) {
    document.exitFullscreen()
      .then(() => console.log("Document Exited from Full screen mode"))
      .catch((err) => console.error(err))

  } else {
    document.documentElement.requestFullscreen();
  }
}

fullscreen.addEventListener("click", changeFullScreen);



document.addEventListener("fullscreenchange", function (e) {

  if (document.fullscreenElement) {
    changeFullscreenLogo();
  } else {
    changeFullscreenLogo();
  }

});


function popupShowed() {
  document.querySelector(".main-popup").classList.remove("delete-item")
}

setTimeout(popupShowed, 800);



function closePopup() {
  document.querySelector(".main-popup").style.display = "none"
}

function popupClosed() {
  document.querySelector(".popup").style.transform = "translate(0,-100px)";

  setTimeout(closePopup, 300);
}

document.querySelector(".popup-btn_close").addEventListener("click", popupClosed);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    popupClosed();
  }

});