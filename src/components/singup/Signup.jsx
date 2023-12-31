import React from "react";
import loginImage from "../../assets/loginImage.jpg";
import Logo from "../../assets/Logo.svg";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Signup.css";

function Signup() {
  return (
    <div className="login-left-styles">
      <img className="login-image-style" src={loginImage} alt="house image" />

      <div className="signup-card">
        <div className="signup-card-top">
          <img className="signup-logo-style" src={Logo} alt="logo" />
        </div>
        <div className="signup-form-container">
          <Form>
            <Row className="mb-3">
              <Form.Group
                as={Col}
                controlId="formGridName"
                className="signup-fields"
              >
                <Form.Control
                  type="text"
                  placeholder="Name"
                  className="signup-field-style"
                />
              </Form.Group>

              <Form.Group
                as={Col}
                controlId="formGridLastName"
                className="signup-fields"
              >
                <Form.Control
                  type="text"
                  placeholder="LastName"
                  className="signup-field-style"
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group
                as={Col}
                controlId="formGridPassword"
                className="signup-fields"
              >
                <Form.Control
                  type="password"
                  placeholder="Password"
                  className="signup-field-style"
                />
              </Form.Group>

              <Form.Group
                as={Col}
                controlId="formGridValidatePassword"
                className="signup-fields"
              >
                <Form.Control
                  type="password"
                  placeholder="Validate Password"
                  className="signup-field-style"
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group
                as={Col}
                controlId="formGridEmail"
                className="signup-fields"
              >
                <Form.Control
                  type="email"
                  placeholder="E-mail"
                  className="signup-field-style"
                />
              </Form.Group>

              <Form.Group
                as={Col}
                controlId="formGridPhoneNumber"
                className="signup-fields"
              >
                <Form.Control
                  type="phone"
                  placeholder="Phone Number"
                  className="signup-field-style"
                />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress">
              <Form.Control
                placeholder="Address(Apartment, studio, or floor)"
                className="signup-field-style"
              />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group
                as={Col}
                controlId="formGridCity"
                className="signup-fields"
              >
                <Form.Control
                  placeholder="City"
                  className="signup-field-style"
                />
              </Form.Group>

              <Form.Group
                as={Col}
                controlId="formGridState"
                className="signup-fields"
              >
                <Form.Select
                  defaultValue="Choose..."
                  className="signup-field-style"
                >
                  <option>Choose State...</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group>

              <Form.Group
                as={Col}
                controlId="formGridZip"
                className="signup-fields"
              >
                <Form.Control
                  placeholder="Zip Code"
                  className="signup-field-style"
                />
              </Form.Group>
            </Row>

            <Button variant="primary" type="submit" className="btn-atras">
              Submit
            </Button>
            <Link to="/">
              <Button variant="primary" type="atras" className="btn-atras">
                Atras
              </Button>
            </Link>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
