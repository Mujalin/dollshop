import React,{ useState } from 'react'

    

export default function Register() {
  const [cus_user,setcus_user]=useState([])
  const [cus_pass,setcus_pass]=useState([])
  
  const selectlogin =(e)=>{
    e.preventDefault();
try {
    
  const bodyData = { cus_user,cus_pass};
  const resp = fetch("http://localhost:4000/Register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(bodyData),
  });
  
  window.location = `/product`;
} catch (err) {
  console.error(err.message);
}
}
    return (
        
        <div className="atom">
        <h2 className="h2">Burapha GiftShop</h2>
    <div className="container1" id="container">
      
      <div className="form-container sign-in-container">
        
          <h1 class="h1">Sign in</h1>
          <div className="social-container">
            <span className="span">or use your account</span>
          </div>
          <form onSubmit={selectlogin} >
          <input className="input" type="text" onChange={(x=>{ setcus_user(x.target.value)})} placeholder="Username" />
          <input className="input" type="password" onChange={(x=>{ setcus_pass(x.target.value)})}  placeholder="Password" />
          <button type="submit" >Sign In</button>
        </form>
        <br/>
      </div>
      
      
      
    </div>
        </div>
    )
}
