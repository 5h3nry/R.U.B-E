// This allows me to check if the user is logged in at all times. Along with other things.
const state = {
  user: null,
  dashboard: null,
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
    render(dashboard(), renderDocuments());
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

function dashboard() {
  return `<h1>Welcome, ${user}.</h1>
      <nav class="site clear">
      <ul>
      <li><a href="google.com" id="docs">Documents</a></li>
      <li><a href="google.com" id="vids">Video Logs</a></li>
      <li><a href="google.com" id="voice">Voice Logs</a></li>
      </ul>
      </nav>
      <div id="console">
      </div>`;
}

function renderDocuments() {
  return '<p>Project War Horse<br />R.U.B-E<br />1999-09-19</p><p><br />TO: Roehampton Research Grant Applications<br />FROM: A.Stoddard<br />SUBJECT: A return to orthodox methods.</p><p>To whom it may concern,</p><p>I come to you today with an exciting new proposal.<br />With new advancements in gene editing technology we want to create a new wave of war machines.</p><p>Horses.</p><p>Strong, resilient creatures with such wonderful elegance.<br />With your funding we want to engineer an advanced breed that runs faster, needs less sleep, consumes less resources.<br />Once our greatest ally in the war they have since been replaced by flawed mechanical counterparts - for true greatness we require a return to orthodox methods.</p><p>We will make them perfect weapons of flesh.</p><p><br />- A.Stoddard</p>'
}