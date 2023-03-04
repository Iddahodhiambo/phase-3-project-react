function Log_in() {
  return (
    <div className="login">

      <h1>Login</h1>
      <form action="post">
        <label for="fname">Email</label>
        <input
          type="text"
          id="fname"
          name="email"
          placeholder="Iddahawuor@yahoo.com.."
        />

        <label for="lname">Password</label>
        <input
          type="Password"
          id="lname"
          name="Password"
          placeholder="Password"
        />

        <input type="submit" value="Log in" />
      </form>
    </div>
  );
}

export default Log_in;
