import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setContacts } from "./actions";
import firebase from "./firebase/config";
import Router from "./Router";
import { setAuthUser } from "./actions/index";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) dispatch(setAuthUser(user));
      else dispatch(setAuthUser(null));
    });
  });

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

  return <Router />;
}

export default App;
