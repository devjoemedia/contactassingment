import React from "react";
import Contact from "./Contact";
import { useSelector } from "react-redux";

const Contacts = () => {
  const contacts = useSelector((state) => state.contacts);

  return (
    <div>
      <h3 className="text-muted">({contacts.length}) Contact(s)</h3>

      <div className="accordion accordion-flush" id="accordionFlushExample">
        {contacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </div>
    </div>
  );
};

export default Contacts;
