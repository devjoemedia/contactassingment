import React from "react";
import Contact from "./Contact";

const Contacts = ({ contacts, editContact, deleteContact }) => {
  return (
    <div>
      <div className="accordion accordion-flush" id="accordionFlushExample">
        {contacts.map((contact) => (
          <Contact
            key={contact.id}
            contact={contact}
            editContact={editContact}
            deleteContact={deleteContact}
          />
        ))}
      </div>
    </div>
  );
};

export default Contacts;
