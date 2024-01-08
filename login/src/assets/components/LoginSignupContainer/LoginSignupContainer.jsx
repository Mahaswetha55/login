import Login from"../Login/Login";
import Signup from "../Signup";
import { useRef, useState } from "react";
import "./LoginSignupContainer.css";

const LoginSignupContainer = () => {


  const [login, setLogin] = useState(true);

  constloginSignupContainerRef = useRef(null);
  
  const handleClick = ()=>{
    setLogin(!login);
    LoginSignupContainerRef.current.classList.toggle("active");
  };
  
  return (
  <div className="login-signup-container" ref={loginSignupContainerRef}>
    <ogin /> 
    <div className="side-div">
        <button type="button" onClick={handleClick}> 
        {" "}
        {login ? "Signup" : "Login"}
        </button>

    </div>

    <Signup />

  </div>
  );

};
export default LoginSignupContainer
