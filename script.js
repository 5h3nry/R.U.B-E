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

//Creating render fuction to display different content.
function render(replacement) {
  document.getElementById("content").innerHTML = `${replacement}`;
}

// Makes the user able to login to different accounts, ADD MORE USERS HERE.
function logIn() {
  let username = document.getElementById("userInput").value;
  let password = document.getElementById("passInput").value;

  if (username === "a.stoddard" && password === "AlphaCentauri1") {
    document.getElementById("invalid").innerHTML = "";
    user = "A.Stoddard";
    window.alert("Welcome, A.Stoddard");
    render(`
      <h1>Welcome, ${user}.</h1>
      <nav class="site clear">
      <ul>
      <li><a href="google.com" id="docs">Documents</a></li>
      <li><a href="google.com" id="vids">Video Logs</a></li>
      </ul>
      </nav>
      <div id="console">
      </div>
      `);
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

function rendervids() {
  if (user === "a.stoddard") {
    document.getElementById("console").innerHTML = `
    <div class="file">
    </div>
    `;
  }
}

document.getElementById("vids").onclick = rendervids();
