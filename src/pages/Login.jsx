import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import firebase from "firebase";
import firebaseConfig from "../firebase/config.js";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogIn = async (e) => {
    e.preventDefault();
    try {
      await firebaseConfig.auth().signInWithEmailAndPassword(email, password);

      navigate("/", { replace: true });
    } catch (err) {
      console.log(err);
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
          <h1>Login</h1>
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
            <Button variant="primary" type="submit" onClick={handleLogIn}>
              Submit
            </Button>
            <Button
              variant="secondary"
              style={{ marginLeft: "20px" }}
              type="submit"
              onClick={LoginWithGoogle}
            >
              Sign in with Google
            </Button>

            <p>
              Don't have an account? <Link to="/signup">Register</Link>
            </p>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Login;
