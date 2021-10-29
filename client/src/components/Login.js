import React, { useState } from 'react'
import Axios from "axios"


export default function Login() {
  const [cus_user, setcus_user] = useState([])
  const [cus_pass, setcus_pass] = useState([])
const [re,setre]=useState([])
  // const selectlogin = async (e) => {
  //   e.preventDefault();
  //   try {

  //     const bodyData = { cus_user, cus_pass };

  //     const resp = await fetch("http://localhost:4000/getlogin", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(bodyData),

  //     });
  //     setre(resp.json())
      
  //     if (re.length>0) {
  //       window.location = "/mesproduct";
  //     } else {
  //       window.location = "/login";
  //     }


  //   } catch (err) {
  //     console.error(err.message);
  //   }
  // }
  const selectlogin = (e)=>{
    e.preventDefault();
    Axios.post("http://localhost:4000/getlogin",{
      cus_user: cus_user,
      cus_pass: cus_pass}
    ,{ withCredentials: true }).then((response)=>{
      console.log(response);
      if(response.data.error){
        // setLoginStatus(response.data.error)
        console.log(response.data.error)
        alert(response.data.error)
      }else{
        // setLoginStatus(Welcome... ${response.data[0].email});
        console.log(response.data[0].email)



         window.location="/mesproduct"
        // return <Redirect to="/"/>;
      }
      // console.log("isAuth:",isAuth);

    })
  }
  return (

    <div className="atom">
      <form class="login" onSubmit={selectlogin} >


        <div class="logo">
          <div class="login-block">
            <h1>Login</h1>
            <input className="input" type="text" onChange={(x => { setcus_user(x.target.value) })} required placeholder="Username" id="username" />
            <input className="input" type="password" onChange={(x => { setcus_pass(x.target.value) })} required placeholder="Password" id="password" />
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
      <br />
    </div>











  )
}