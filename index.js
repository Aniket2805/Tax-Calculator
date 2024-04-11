const dropdowns = document.querySelectorAll(".dropdown");
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

dropdowns.forEach((dropdown) => {
  const select = dropdown.querySelector(".select");
  const caret = dropdown.querySelector(".caret");
  const menu = dropdown.querySelector(".menu");
  const options = dropdown.querySelectorAll(".menu li");
  const selected = dropdown.querySelector(".selected");
  select.addEventListener("click", () => {
    select.classList.toggle("select-clicked");
    menu.classList.toggle("menu-open");
  });

  options.forEach((option) => {
    option.addEventListener("click", () => {
      selected.innerText = option.innerText;
      caret.classList.remove("caret-rotate");
      menu.classList.remove("menu-open");

      options.forEach((option) => {
        option.classList.remove("active");
      });
      option.classList.add("active");
    });
  });
});
var income = document.getElementById("income");
var incomeerr = document.getElementById("incomeerr");
var exincome = document.getElementById("exincome");
var exincomeerr = document.getElementById("exincomeerr");
var age = document.getElementById("age");
var ageerr = document.getElementById("ageerr");
var deductions = document.getElementById("deductions");
var deductionserr = document.getElementById("deductionserr");
var taxval = document.getElementById("tax");
function checkincome() {
  if (income.value.length > 0 && isNaN(income.value)) {
    incomeerr.style.display = "flex";
  } else {
    incomeerr.style.display = "none";
  }
}
function checkexincome() {
  if (exincome.value.length > 0 && isNaN(exincome.value)) {
    exincomeerr.style.display = "flex";
  } else {
    exincomeerr.style.display = "none";
  }
}
function checkdeductions() {
  if (deductions.value.length > 0 && isNaN(deductions.value)) {
    deductionserr.style.display = "flex";
  } else {
    deductionserr.style.display = "none";
  }
}
function handlesubmit() {
  var flag = false;
  if (exincome.value.length == 0 || isNaN(exincome.value)) {
    exincomeerr.style.display = "flex";
    flag = true;
  }
  if (income.value.length == 0 || isNaN(income.value)) {
    incomeerr.style.display = "flex";
    flag = true;
  }
  if (deductions.value.length == 0 || isNaN(deductions.value)) {
    deductionserr.style.display = "flex";
    flag = true;
  }
  if (age.innerText.length == 0) {
    ageerr.style.display = "flex";
    flag = true;
  }
  if (!flag) {
    var newincome =
      parseFloat(income.value) +
      parseFloat(exincome.value) -
      parseFloat(deductions.value);
    console.log(newincome);
    if (newincome > 800000) {
      if (age.innerText == "< 40") {
        newincome = newincome - 0.3 * (newincome - 800000);
      } else if (age.innerText == "≥ 40 & < 60") {
        newincome = newincome - 0.4 * (newincome - 800000);
      } else {
        newincome = newincome - 0.1 * (newincome - 800000);
      }
    }
    taxval.innerHTML = "Rs. " + newincome;
    $(function () {
      $("#exampleModal").modal("show");
    });
  }
}
