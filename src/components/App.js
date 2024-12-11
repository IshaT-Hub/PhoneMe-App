import React from "react";
import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";
import Header from "./Header";
import ContactList from "./ContactList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AddContact from "./AddContacts";

function App() {
  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const deleteContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/add" element={<AddContact />} />
          <Route path="/" element={<ContactList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
