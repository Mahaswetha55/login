import "./Signup.css";

const Signup = () => {
  return (
    <div className="signup">
      <h1>Sign Up</h1>
      <form>
        <input type={'email'} placeholder={'Email'}/>
        <input type={'password'} placeholder={'Password'}/>
        <input type={'confirm password'} placeholder={'Confirm Password'}/>

        <button type={"submit"}>Signup</button>
      </form>
    </div>
  );
};

export default Signup;