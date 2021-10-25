import React from 'react'

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
const atomic=(e)=>{

    
    //มีปัญหา
    signUpButton.addEventListener('click', () => {
        container.classList.add("right-panel-active");
    });
    
    signInButton.addEventListener('click', () => {
        container.classList.remove("right-panel-active");
    });
}
    

export default function Register() {
    return (
        
        <div className="atom">
                       <h2 className="h2">Burapha GiftShop</h2>
    <div className="container1" id="container">
      <div className="form-container sign-up-container">
        <form method="post" action="register_up.php">
          <h1 class="h1">Create Account</h1>
          <input className="input" type="text" name="cus_user" placeholder="Username" required />
          <input className="input" type="password" name="cus_pass" placeholder="Password" required />
          <input className="input" type="email" name="cus_email" placeholder="Email" required />
          <input className="input" type="text" name="cus_name" placeholder="name" required />
          <input className="input" type="text" name="cus_lname" placeholder="lastname" required />
          <input className="input" type="text" name="cus_phone" placeholder="Phone" maxLength={10} required />
          <button className="button">Sign Up</button>
        </form>

      </div>
      <div className="form-container sign-in-container">
        <form className="form" action="http://localhost:3000">
          <h1 class="h1">Sign in</h1>
          <div className="social-container">
            <span className="span">or use your account</span>
          </div>
          <input className="input" type="text" name="cus_user" placeholder="Username" />
          <input className="input" type="password" name="cus_pass" placeholder="Password" />
          <button type="submit" name="add">Sign In</button>
        </form>
      </div>
      <form onClick={atomic}>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1 class="h1">Welcome</h1>
            <p className="p">To keep connected with us please login with your personal info</p>
            <button className="ghost" id="signIn">Sign In</button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1 class="h1">Hello</h1>
            <p className="p">Enter your personal details and start journey with us</p>
            <button className="ghost" id="signUp">Sign Up</button>
          </div>
        </div>
      </div>
      </form>
    </div>
        </div>
    )
}
