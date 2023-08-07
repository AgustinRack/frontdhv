import React from "react";
import "../login/Login.css";
import loginImage from "../../assets/loginImage.jpg";
import fullLogo from "../../assets/fullLogo.svg";
import vector from "../../assets/Vector.svg";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login-container">
      <img className="login-image-style" src={loginImage} alt="house" />

      <div className="login-card">
        <div className="login-card-top">
          <img className="fullLogo-style" src={fullLogo} alt="full logo" />
          <div className="vector-container">
            <img className="vector-style" src={vector} alt="vector" />
            <div className="vector-text">Tu nueva vivienda esta aquí</div>
          </div>
        </div>
        <div>
          <Form>
            <Form.Group className="mb-3 email-field" controlId="formBasicEmail">
              <Form.Control
                className="field-style"
                type="email"
                placeholder="EMAIL"
              />
            </Form.Group>
            <Form.Group
              className="mb-3 password-field"
              controlId="formBasicPassword"
            >
              <Form.Control
                className="field-style"
                type="password"
                placeholder="PASSWORD"
              />
            </Form.Group>

            <div className="change-password">
              <Link to="/Signup">
                <p>Crear cuenta</p>
              </Link>
            </div>

            <Button className="login-button">Login</Button>

            <Link to="/">
              <Button className="login-button">Atras</Button>
            </Link>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;
