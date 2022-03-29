import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setContacts } from "./actions";
import ContactList from "./components/ContactList";
import ContactsForm from "./components/ContactsForm";
import firebase from "./firebase/config";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      firebase
        .firestore()
        .collection("contacts")
        .onSnapshot((contacts) => {
          let data = [];
          contacts.forEach((contact) => data.push(contact.data()));

          dispatch(setContacts(data));
          console.log(data);
        });
    } catch (err) {
      console.log(err.message);
    }
  }, [dispatch]);

  return (
    <div style={{ width: "550px", margin: "auto" }} className="bg-light p-5">
      <h3 className="text-muted">Contact List App</h3>
      <ContactsForm />
      <br />
      <ContactList />
    </div>
  );
}

export default App;
