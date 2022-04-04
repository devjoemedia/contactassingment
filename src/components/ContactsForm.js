import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import firebase from "../firebase/config";

const ContactsForm = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newContact = { id: uuid(), name, location, phone };

    try {
      await firebase
        .firestore()
        .collection("contacts")
        .doc(newContact.id)
        .set(newContact);
    } catch (err) {
      console.log(err.messge);
    }

    setName("");
    setLocation("");
    setPhone(0);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            aria-describedby="emailHelp"
            placeholder="Enter you name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="loc" className="form-label">
            Location
          </label>
          <input
            type="text"
            className="form-control"
            id="loc"
            placeholder="Enter your location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone Number
          </label>
          <input
            type="number"
            className="form-control"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-secondary">
          Add Contact
        </button>
      </form>
    </div>
  );
};

export default ContactsForm;
