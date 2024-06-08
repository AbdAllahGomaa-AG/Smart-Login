let welcome = document.getElementById("welcome");
console.log(welcome);
// Get the user's name from localStorage
let userName = localStorage.getItem("currentUser");

if (userName) {
  welcome.innerHTML = "Welcome MR " + userName;
}

