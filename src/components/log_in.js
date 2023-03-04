import React from "react";
import { useNavigate } from "react-router-dom";

function Log_in() {

  const navigate = useNavigate();
  //Redirect to sign up page
  function handleClick(){
    navigate("/signup");
  }
  
  return (
    <div className="login">

      <h1>Login</h1>
      <form action="post">
        <label for="email">Email</label>
        <input
          type="text"
          id="fname"
          name="email"
          placeholder="Iddahawuor@yahoo.com.."
        />

        <label for="password">Password</label>
        <input
          type="Password"
          id="lname"
          name="Password"
          placeholder="Password"
        />

        <input type="submit" value="Log in" />
      </form>
      <hr/>
      <div class="signup">
        <p>Don't have an account?</p>
        <button className="btn" onClick={handleClick} >Sign up</button>
      </div>
    </div>
  );
}

export default Log_in;
