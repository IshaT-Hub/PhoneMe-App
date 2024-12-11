import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  console.log(props);

  const deleteContactHandler = (id) => {
    props.getContactID(id);
  };

  const contacts = [
    {
      id: 1,
      name: "John",
      email: "j@j.com",
    },
  ];
  const renderContactList = contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHandler={deleteContactHandler}
        key={contact.id}
      />
    );
  });
  return (
    <div className="main">
      <div className="ui celled list">{renderContactList}</div>;
      <h2>
        Contact List
        <button className="ui button blue right">Add Contacts </button>
      </h2>
    </div>
  );
};

export default ContactList;
