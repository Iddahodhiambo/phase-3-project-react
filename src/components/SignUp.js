import React from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
//   function handleSubmit(e) {
//     e.preventDefault();
//     navigate("/login");
//     console.log("submit");
//   }

  function handleClick() {
    navigate("/login");
    console.log("click");
  }

  return (
    <div className="Signup">
      <h1>Sign Up</h1>
      <form>
        <label for="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Iddahawuor@yahoo.com.."
        />

        <label for="password">Password</label>
        <input
          type="Password"
          id="password"
          name="Password"
          placeholder="Password.."
        />

        <input type="submit" value="Sign Up" />
      </form>
      <hr/>
      <div class="signup">
        <p>Already a user?</p>
        <button className="btn" onClick={handleClick}>Log in</button>
      </div>
    </div>
  );
}

export default SignUp;
