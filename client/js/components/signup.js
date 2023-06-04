function renderSignUp() {
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
          <form action="" onSubmit="signUp(event)">
            <label for="email">Name</label>
            <input type="text" name="name" required>
            <label for="email">Email</label>
            <input type="text" id="email" name="email" required />

            <label for="password">Password</label>
            <input type="password" id="password" name="password" required />

            <input type="submit" value="Sign Up" />

            <p class="signup-link">Already Registered? <a href="#" onclick="renderLogin()">Please Sign In</a></p>
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
  
  function signUp(event) {
    event.preventDefault()
    const form = event.target
  
    // converts form data into an object
    const data = Object.fromEntries(new FormData(form))
  
    fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(email => state.loggedInUser = email)
    .then(renderLogin())
  }