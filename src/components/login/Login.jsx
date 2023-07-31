import React from "react";
import "../login/Login.css";
import loginImage from "../../assets/loginImage.jpg";

function Login() {
  return (
    <div className="login-left-styles">
      <img className="login-image-style" src={loginImage} alt="house image" />
    </div>
  );
}

export default Login;
