import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import firebase from "../firebase/config";

const Contact = ({ contact }) => {
  const [name, setName] = useState(contact.name);
  const [phone, setPhone] = useState(contact.phone);
  const [location, setLocation] = useState(contact.location);
  const [show, setShow] = useState(false);

  const handleEdit = async () => {
    const updatedContact = {
      id: contact.id,
      name,
      phone,
      location,
    };

    try {
      await firebase
        .firestore()
        .collection("contacts")
        .doc(updatedContact.id)
        .update(updatedContact);
    } catch (err) {
      console.log(err.messge);
    }

    setShow(false);
  };

  const handleDelete = async () => {
    try {
      await firebase
        .firestore()
        .collection("contacts")
        .doc(contact.id)
        .delete();
    } catch (err) {
      console.log(err.messge);
    }
  };

  return (
    <div>
      <div className="accordion-item mb-2">
        <h2
          className="accordion-header"
          id={"panelsStayOpen-heading-" + contact.id}
        >
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={"#panelsStayOpen-collapse-" + contact.id}
            aria-expanded="false"
            aria-controls={"panelsStayOpen-heading-" + contact.id}
          >
            {contact.name}
          </button>
        </h2>
        <div
          id={"panelsStayOpen-collapse-" + contact.id}
          className="accordion-collapse collapse"
          aria-labelledby={"panelsStayOpen-heading-" + contact.id}
        >
          <div className="accordion-body d-flex justify-content-between align-items-center">
            <div>
              <h5>
                Phone: <span className="text-muted">{contact.phone}</span>
              </h5>
              <h5>
                Location: <span className="text-muted">{contact.location}</span>
              </h5>
            </div>
            <div className="d-grid gap-1">
              <Button size="sm" onClick={() => setShow(true)}>
                Edit
              </Button>
              <Button size="sm" variant="danger" onClick={handleDelete}>
                Delete
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* Modal Section */}
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
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
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            Save changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Contact;
