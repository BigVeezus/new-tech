import { LoginWrap } from "./login.styles";

export const Login = () => {
  const handleSubmit = () => {};
  const handleChange = () => {};
  return (
    <LoginWrap>
      <h3>Welcome Back!</h3>
      <form onSubmit={handleSubmit}>
        <div className="email">
          <label htmlFor="email">Email Adress:</label>
          <input type="text" name="email" onChange={handleChange} />
        </div>
        <div className="password">
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" onChange={handleChange} />
        </div>
        <p className="forgot">Forgot password?</p>
        <button className="submit">Log in</button>
      </form>
      <p>
        Dont have an account? kindly <span className="signUp">sign up</span>{" "}
        here
      </p>
    </LoginWrap>
  );
};
