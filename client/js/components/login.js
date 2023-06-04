function renderLogin() {
  div.style.display = 'none';
    document.querySelector('#page').innerHTML = `
    <div class="container">
    <div class="left">
      <img src="right.jpg" alt="Logo" />
    </div>
    <div class="right">
      <div class="logo">
          <h2>Weather Fit & Co</h2>
      </div>
      <div class="form">
          <div class="login-form">
            <form action="" onSubmit="logIn(event)">
            <label for="email">Email</label>
            <input type="text" id="email" name="email" required />

            <label for="password">Password</label>
            <input type="password" id="password" name="password" required />

            <input type="submit" value="Login" />

            <p class="signup-link">New Here? <a href="#" onclick="renderSignUp()">Please Sign Up</a></p>
          </form>
        </div>
      </div>
      <footer>
          <span>Weather fit & co</span>
      </footer>
      
    </div>
  </div>
    `
  }
  
  function logIn(event) {
    event.preventDefault()
    const form = event.target
  
    // converts form data into an object
    const data = Object.fromEntries(new FormData(form))
  
    fetch('/api/sessions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          renderLogin()
          renderError(res.error)
        } else {
          state.loggedInUser = res
          setTimeout(reloadPage, 1000);


        }
      
      })
  }
  
  function renderError(errorMessage) {
    document.querySelector('#page').innerHTML =
      `<h2 style='color: red;'>${errorMessage}</h2>` +
      document.querySelector('#page').innerHTML
  }


function reloadPage(){
  location.reload();
  
}