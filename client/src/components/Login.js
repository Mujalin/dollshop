import React,{ useState } from 'react'



export default function Login() {
  const [cus_user,setcus_user]=useState([])
  const [cus_pass,setcus_pass]=useState([])

  const selectlogin =(e)=>{
    e.preventDefault();
try {

  const bodyData = { cus_user,cus_pass};
  const resp = fetch("http://localhost:4000/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(bodyData),
  });

  window.location = "/mesproduct";
} catch (err) {
  console.error(err.message);
}
}
    return (

        <div className="atom">
          <form class="login" onSubmit={selectlogin} >


          <div class="logo">
        <div class="login-block">
          <h1>Login</h1>
          <input className="input" type="text"   onChange={(x=>{ setcus_user(x.target.value)})} required placeholder="Username"  id="username" />
          <input className="input" type="password" onChange={(x=>{ setcus_pass(x.target.value)})} required placeholder="Password" id="password" />
          <button type="submit">Submit</button>
       </div>
          </div>
        </form>
        <br/>
      </div>











    )
}