import React, { useState } from "react";
import ContactList from "./components/ContactList";
import ContactsForm from "./components/ContactsForm";
import { v4 as uuid } from "uuid";

function App() {
  const [contacts, setContacts] = useState([
    {
      id: uuid(),
      name: "Nana Adjoa",
      phone: "0240000000",
      location: "East Legon",
    },
    { id: uuid(), name: "Tony Kroos", phone: "0245050500", location: "China" },
  ]);

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const editContact = (newContact) => {
    const updatedContacts = contacts.map((contact) => {
      if (newContact.id === contact.id) return newContact;
      return contact;
    });

    setContacts(updatedContacts);
  };

  const deleteContact = (contactId) => {
    const updatedContacts = contacts.filter(
      (contact) => contact.id !== contactId
    );

    setContacts(updatedContacts);
  };

  return (
    <div style={{ width: "550px", margin: "auto" }} className="bg-light p-5">
      <h3 className="text-muted">Contact List App</h3>
      <ContactsForm addContact={addContact} />
      <br />
      <h3 className="text-muted">({contacts.length}) Contact(s)</h3>
      <ContactList
        contacts={contacts}
        deleteContact={deleteContact}
        editContact={editContact}
      />
    </div>
  );
}

export default App;
