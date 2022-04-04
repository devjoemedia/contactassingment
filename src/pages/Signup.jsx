import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import firebase from "firebase";
import firebaseConfig from "../firebase/config.js";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await firebaseConfig
        .auth()
        .createUserWithEmailAndPassword(email, password);

      navigate("/", { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  const LoginWithGoogle = async (e) => {
    e.preventDefault();

    try {
      const provider = new firebase.auth.GoogleAuthProvider();

      await firebaseConfig.auth().signInWithPopup(provider);

      navigate("/", { replace: true });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <div
          style={{
            width: "400px",
            backgroundColor: "#f1f1f1",
            padding: 50,
          }}
        >
          <h1>Register</h1>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleSignUp}>
              Submit
            </Button>
            <Button
              className="btn btn-secondary ml-2"
              variant="primary"
              type="submit"
              onClick={LoginWithGoogle}
              style={{ marginLeft: "20px" }}
            >
              Sign in with Google
            </Button>

            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Signup;
