import { v4 as uuid } from "uuid";

const initialState = {
  contacts: [
    {
      id: uuid(),
      name: "Nana Adjoa",
      phone: "0240000000",
      location: "East Legon",
    },
    {
      id: uuid(),
      name: "Tony Kroos",
      phone: "0245050500",
      location: "China Town",
    },
  ],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case "EDIT_CONTACT":
      const updatedContacts = state.contacts.map((contact) => {
        if (contact.id === action.payload.id) return action.payload;
        return contact;
      });

      return {
        ...state,
        contacts: updatedContacts,
      };

    case "DELETE_CONTACT":
      const newContacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );

      return {
        ...state,
        contacts: newContacts,
      };
    default:
      return state;
  }
};
