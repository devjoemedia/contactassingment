import ContactList from "../components/ContactList";
import ContactsForm from "../components/ContactsForm";
import { Button } from "react-bootstrap";
import firebase from "../firebase/config";
import { useState } from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const [showWelcomeMsg, setShowWelcomeMsg] = useState(true);

  const user = useSelector((state) => state.auth.user);

  const handleLogOut = async () => {
    try {
      await firebase.auth().signOut();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ width: "600px", margin: "auto" }}>
      <Button style={{ float: "right" }} onClick={handleLogOut}>
        Log out
      </Button>
      <h4>welcome {user.email}</h4>
      <h3 className="text-muted">ContactList App</h3>
      <ContactsForm />
      <br />
      <ContactList />
    </div>
  );
};

export default Home;
