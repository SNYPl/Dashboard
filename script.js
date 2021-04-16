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



menuToggler.addEventListener("click", menuToggle);

let mainContent = document.querySelector(".main-items");

function menuToggle() {
  mainContent.classList.toggle("menu-change_big");
  mainContent.classList.toggle("menu-change_small");
  console.log("click");
}