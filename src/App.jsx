import "./App.css";
import ContactForm from "./components/contactform/ContactForm";
import SearchBox from "./components/searchbox/SearchBox";
import ContactList from "./components/contactlist/ContactList";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";

function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem("contacts")) || [
      { id: "id-1 ", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2 ", name: "Hermione Kline", number: "443-89 -12" },
      { id: "id-3 ", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4 ", name: "Annie Copeland", number: "227-91-26" },
    ]
  );

  const [filter, setFilter] = useState("");

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase()) ||
      contact.number.toLowerCase().includes(filter.toLowerCase())
  );

  const updateFilter = (text) => {
    setFilter(text);
  };

  const updateLocalStorage = () => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  };

  useEffect(() => {
    updateLocalStorage();
  }, [contacts]);

  const addContact = (contact) => {
    console.log(contact);
    const newContact = {
      id: nanoid(),
      name: contact.name,
      number: contact.number,
    };
    setContacts((prev) => [...prev, newContact]);
  };

  const deleteContact = (id) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
  };

  return (
    <>
      <div>
        <h1>Phone Book</h1>
        <ContactForm addContact={addContact} />
        <SearchBox filter={filter} updateFilter={updateFilter} />
        <ContactList
          contacts={filteredContacts}
          deleteContact={deleteContact}
        />
      </div>
    </>
  );
}

export default App;
