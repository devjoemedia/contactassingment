import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import firebase from "../firebase/config";

const ContactsForm = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = { id: uuid(), name, location, phone };

    try {
      firebase
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
          <label htmlFor="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter you name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Location
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter your location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Phone Number
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleInputPassword1"
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
