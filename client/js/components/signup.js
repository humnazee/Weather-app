function renderSignUp() {
    document.querySelector('#page').innerHTML = `
      <section class='sign-up'>
        <form action="" onSubmit="signUp(event)">
          <h2>Sign Up:</h2>
          <fieldset>
            <label for="">Name: </label>
            <input type="text" name="name">
          </fieldset>
          <fieldset>
            <label for="">Email: </label>
            <input type="text" name="email">
          </fieldset>
          <fieldset>
            <label for="">Password: </label>
            <input type="password" name="password">
          </fieldset>
          <button>Sign Up</button>
        </form>
        <h3>Already have an account?</h3>
      <button onClick="renderLogin()">Log In</button>
    </section>
      </section>
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
    .then((email) => {
      state.loggedInUser = email
    // renderLogin();
    renderLogin();
    });
    //new
    // .then(() => )
  }