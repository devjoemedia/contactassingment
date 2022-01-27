import React from "react";

const Contacts = ({ contacts }) => {
  return (
    <div>
      <div className="accordion accordion-flush" id="accordionFlushExample">
        {contacts.map((contact, index) => (
          <div className="accordion-item" key={index}>
            <h2
              className="accordion-header"
              id={"panelsStayOpen-heading-" + index}
            >
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={"#panelsStayOpen-collapse-" + index}
                aria-expanded="false"
                aria-controls={"panelsStayOpen-heading-" + index}
              >
                {contact.name}
              </button>
            </h2>
            <div
              id={"panelsStayOpen-collapse-" + index}
              className="accordion-collapse collapse"
              aria-labelledby={"panelsStayOpen-heading-" + index}
            >
              <div className="accordion-body">
                <h5>
                  Phone: <span className="text-muted">{contact.phone}</span>
                </h5>
                <h5>
                  Location:{" "}
                  <span className="text-muted">{contact.location}</span>
                </h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contacts;
