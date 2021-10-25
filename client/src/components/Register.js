import React from 'react'

    

export default function Register() {
    return (
        
        <div className="atom">
        <h2 className="h2">Burapha GiftShop</h2>
    <div className="container1" id="container">
      
      <div className="form-container sign-in-container">
        
          <h1 class="h1">Sign in</h1>
          <div className="social-container">
            <span className="span">or use your account</span>
          </div>
          <form className="form" action="http://localhost:3000">
          <input className="input" type="text"  placeholder="Username" />
          <input className="input" type="password"  placeholder="Password" />
          <button type="submit" >Sign In</button>
        </form>
      </div>
      
      
      
    </div>
        </div>
    )
}
