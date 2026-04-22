// This allows me to check if the user is logged in at all times. Along with other things.
const state = {
  user: null,
};

//Creates a routing object that allows me to change the content based on URL, also can make some of them hide behind a login.
const routes = {
  "#/": Home,
  "#/a.stoddard": aStoddard,
  "#/scientist2": Scientist2,
};

// Makes the user able to login to different accounts, ADD MORE USERS HERE.
function logIn() {
  let user = document.getElementById("userInput").value;
  let pass = document.getElementById("passInput").value;

  if (user === "a.stoddard" && pass === "AlphaCentauri1") {
    document.getElementById("invalid").innerHTML = "";
    user = "a.stoddard";
  } else {
    event.preventDefault;
    document.getElementById("userInput").classList.add("invalid");
    document.getElementById("passInput").classList.add("invalid");
    document
      .getElementById("userInput")
      .addEventListener("animationend", (event) => {
        document.getElementById("userInput").classList.remove("invalid");
      });
    document
      .getElementById("passInput")
      .addEventListener("animationend", (event) => {
        document.getElementById("passInput").classList.remove("invalid");
      });
    document.getElementById("invalid").innerHTML = "<span>INVALID LOGIN</span>";
    document.getElementById("logIn").reset();
  }
}
