<template>
  <section class="login-page">
      <section id="login-container">
        <div>
          <img src="@/assets/logo.png" id="image" />
          <h1>Welcome to postIt!</h1>
        </div>
        <div>
          <h4>
            <a href="#">Create an Account</a>
          </h4>
        </div>
        <div>
          <h4>Or</h4>
        </div>
        <div>
          <h3>Please Log In</h3>
          <form>
            <div>
              <input type="text" name="email" placeholder="Email">
            </div>
            <div>
              <input type="password" name="password" placeholder="Password">
            </div>
            <div>
            <router-link to="/" tag="button">Log In</router-link>
          </div>
            <div>
              <small>
                <a href="#">Forgot password?</a>
              </small>
            </div>
          </form>
        </div>
      </section>
    </section>
</template>

<script>
export default {
    name: 'LoginPage',
}
</script>

<style>

#login-container {
    background-color: #ffffff;
    background-position: 15px 15px;
    min-width: 25%;
    padding: 45px 45px;
    text-align: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%); 
}

.login-page {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

#login-container form div>input {
    padding: 8px 16px;
    margin: 4px 0;
}

button {
    padding: 8px 16px;
    margin: 4px 0;
    color: #ffffff;
    background-color: #01579b;
    border: none;
    border-radius: 4px;
}

nav {
    display: flex;
    background-color: #fafafa;
    align-items: center;
}

nav div {
    height: 30px;
    flex-grow: 4;
    padding: 10px;
}

#image {
    position:absolute;
    max-width: 20%;
    height: auto;
    top: 15px;
    left: 15px;
}

a {
  color: #40c4ff;
}

</style>