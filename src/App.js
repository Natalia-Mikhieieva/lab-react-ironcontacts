import "./App.css";
import contactJson from "./contacts.json";
import React, { useState } from "react";

function App() {
  const [contacts, setContacts] = useState(contactJson.slice(0, 5));
  
  function addRandom() {
    const remainingContacts = contactJson.slice(5)
    const newContact = remainingContacts[(Math.floor(Math.random() * remainingContacts.length))]
    
    if(!contacts.includes(newContact)){
      setContacts([newContact,...contacts])
    } 
    return console.log(newContact)
  }
  function sortContacts() {
    const sortedContacts = [...contacts];

    sortedContacts.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      } else if (b.name < a.name) {
        return 1;
      }
      return 0;
    });
    setContacts(sortedContacts);
  }

  function sortByRating() {
    const sortedContacts = [...contacts];

    sortedContacts.sort((a, b) => {
      if (a.popularity < b.popularity) {
        return 1;
      } else if (b.popularity < a.popularity) {
        return -1;
      }
      return 0;
    });
    setContacts(sortedContacts);
  }

  function deleteContact(contactId) {
    const filteredContacts = contacts.filter(contact => {
      return contact.id !== contactId;
    });
 
    setContacts(filteredContacts);
  }
  return (
    <div className="App">
      <button onClick={addRandom}>Add a contact</button>
      <button onClick={sortContacts}>Sort contacts by name</button>
      <button onClick={sortByRating}>Sort contacts by popularity</button>

      <table>
        <thead>
          <tr>
            <th>Picture </th>
            <th>Name </th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => {
            return (
              <tr key={contact.id}>
                <td>
                  <img src={contact.pictureUrl} alt="" height="100px" />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td>{contact.wonOscar && <img src="../Trophy.png" alt="" className="trophy"></img>}</td>
                <td>{contact.wonEmmy && <img src="../Trophy.png" alt="" className="trophy"></img>}</td>
                <td><button onClick={() => deleteContact(contact.id)}>Delete</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
