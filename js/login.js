let emailInputLoginF = document.querySelector("#emailInputLoginF");
let passwordInputLoginF = document.querySelector("#passwordInputLoginF");
let required = document.querySelector("#required");
let Invalid = document.querySelector("#Invalid");

document.forms[0].addEventListener("submit", function (eventInfo) {
  eventInfo.preventDefault();
  if (loginUserCheck() === true) {
    window.location.href = "welcome.html";
  } else if (isEmpty() === true) {
    Invalid.classList.remove("d-none");

    // required.textContent = "Invalid username or password";
  }
  isEmpty();
});

// Set list
let NewArray = [];
if (localStorage.getItem("userArray") == null) {
  NewArray = [];
} else {
  NewArray = JSON.parse(localStorage.getItem("userArray"));
}

//
//check Empty form
//
function isEmpty() {
  if (emailInputLoginF.value === "" || passwordInputLoginF.value === "") {
    required.classList.remove("d-none");
    return false;
  } else {
    required.classList.add("d-none");
    return true;
  }
}

//
function loginUserCheck() {
  for (var i = 0; i < NewArray.length; i++) {
    if (
      NewArray[i].email.toLowerCase() == emailInputLoginF.value.toLowerCase() &&
      NewArray[i].pass.toLowerCase() == passwordInputLoginF.value.toLowerCase()
    ) {
      localStorage.setItem("currentUser", NewArray[i].name);
      console.log("yes");
      return true;
    }
  }
  console.log("no");

  return false;
}
