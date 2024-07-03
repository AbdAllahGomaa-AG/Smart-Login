// sign up
let nameUp = document.querySelector("#nameUp");
let emailUp = document.querySelector("#emailUp"); //
let passwordUp = document.querySelector("#passwordUp");
let btnUp = document.querySelector("#btnUp");
let alertAg = document.getElementById("aglare"); //
let spanAg = document.querySelector("#spanAgd"); //
let formControl = Array.from(document.querySelectorAll("form-control"));
let inputs = Array.from(document.querySelectorAll("input"));
let alertForm = document.querySelector("#alertForm");
let alertFormup = document.querySelector("#alertFormup");
let alreadyExists = document.querySelector("#alreadyExists");

// ===============================
// ======Start sign up ===========
// ===============================
// ===============================
let NewArray = [];
if (localStorage.getItem("userArray") == null) {
  NewArray = [];
} else {
  NewArray = JSON.parse(localStorage.getItem("userArray"));
}
// ======validation keypress =====
// ===============================
for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("blur", function (eventInfo) {
    validation(eventInfo.target);
  });
}
// Initialize an empty array or get the existing one from localStorage
// let NewArray = JSON.parse(localStorage.getItem("userArray")) || [];

// ===============================
// ======stop reload==============
// ===============================
document.forms[0].addEventListener("submit", function (eventInfo) {
  eventInfo.preventDefault();
  if (isEmailExist() === true) {
    add();
    alreadyExists.classList.add("d-none");
    clear();
  } else {
    nameUp.classList.add("is-valid");
    passwordUp.classList.add("is-valid");
    emailUp.classList.add("is-invalid");
    alreadyExists.classList.remove("d-none");
    alertFormup.classList.add("d-none");
  }
});

// ===============================
// =========== add ===============
// ===============================
function add() {
  let userName = {
    name: nameUp.value.trim(),
    email: emailUp.value.trim(),
    pass: passwordUp.value.trim(),
  };

  if (
    nameUp.classList.contains("is-valid") &&
    passwordUp.classList.contains("is-valid") &&
    emailUp.classList.contains("is-valid") &&
    userName.name !== "" &&
    userName.pass !== "" &&
    userName.email !== ""
  ) {
    NewArray.push(userName);
    localStorage.setItem("userArray", JSON.stringify(NewArray));
    //
    alertFormup.classList.remove("d-none");
    alertForm.classList.add("d-none");
    clear();
    // is -valid
    nameUp.classList.remove("is-valid");
    passwordUp.classList.remove("is-valid");
    emailUp.classList.remove("is-valid");
    console.log("done");
  } else {
    alertForm.classList.remove("d-none");
    // is-invalid
    nameUp.classList.add("is-invalid");
    passwordUp.classList.add("is-invalid");
    emailUp.classList.add("is-invalid");
    alertFormup.classList.add("d-none");
    inputs.classList.replace("is-invalid", "is-valid");
    console.log(inputs);
  }
}

// ===============================
// =========== clear =============
// ===============================
function clear(element) {
  nameUp.value = "";
  emailUp.value = "";
  passwordUp.value = "";
  console.log(element);
}
// ===============================
// =========== validation=========
// ===============================
function validation(element) {
  //   console.log(element);
  let reg = {
    nameUp: /^[a-zA-Z ]{2,30}$/i,
    emailUp: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
    // Minimum eight characters, at least one letter and one number:
    passwordUp: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/i,
  };
  if (reg[element.id].test(element.value)) {
    element.classList.add("is-valid");
    element.classList.remove("is-invalid");
  } else {
    element.classList.add("is-invalid");
    element.classList.remove("is-valid");
  }
}

// check if email is already exists
function isEmailExist() {
  for (var i = 0; i < NewArray.length; i++) {
    if (NewArray[i].email.toLowerCase() == emailUp.value.toLowerCase()) {
      console.log("helloo");
      alreadyExists.classList.add("is-valid");
      return false;
    }
  }
  return true;
}

// ===============================
// ======End sign up ===========
// ===============================
