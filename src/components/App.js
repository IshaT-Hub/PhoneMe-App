import React from 'react';
import {useState, useEffect} from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import Header from "./Header";
import ContactList from "./ContactList";

import AddContact from "./AddContacts";

function App() {
 
  const addContactHandler = (contact) =>{
    console.log(contact); 
    setContacts([...contacts, {id: uuid(), ...contact }]);
  };

  console.log("bhu");

  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );
  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  } ,[contacts]);


  const deleteContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  }
  
 
  return (
    <div className="ui container">
      <Header/>
      <AddContact addContactHandler = {addContactHandler}/>
      <ContactList contacts = {contacts} getContactID = {deleteContactHandler}/>  
   </div>
  );
}

export default App;
