const state = {
  user: null,
  isLoading: false,
}

function logIn() {
  let user = document.getElementById('userInput').value
  let pass = document.getElementById('passInput').value

    if(user === "a.stoddard" && pass === "AlphaCentauri1") {
      document.getElementById('invalid').innerHTML = ''
      user = 'a.stoddard';

    } else {
      event.preventDefault;
    alert('Please enter a valid login.');
    document.getElementById('invalid').innerHTML = '<span>INVALID LOGIN</span>'
  }
};