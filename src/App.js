import React, { useState } from "react";
import Contacts from "./components/Contacts";
import ContactsForm from "./components/ContactsForm";

function App() {
  const [contacts, setContacts] = useState([
    { name: "Nana Adjoa", phone: "0240000000", location: "East Legon" },
    { name: "Tony Kroos", phone: "0245050500", location: "China" },
    { name: "Jay West", phone: "0245550000", location: "Califonia" },
    { name: "Jamil Codes", phone: "0246666666", location: "Canada" },
  ]);

  const addContact = (newUser) => {
    setContacts([...contacts, newUser]);
  };

  return (
    <div style={{ width: "450px", margin: "auto" }} className="bg-light p-5">
      <h3 className="text-muted">Contact List App</h3>
      <ContactsForm addContact={addContact} />
      <br />
      <h3 className="text-muted">Contact List</h3>
      <Contacts contacts={contacts} />
    </div>
  );
}

export default App;
