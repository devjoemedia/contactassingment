import React, { useState } from "react";
import ContactList from "./components/ContactList";
import ContactsForm from "./components/ContactsForm";

function App() {
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
