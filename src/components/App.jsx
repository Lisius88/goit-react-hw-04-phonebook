import { useState, useEffect } from 'react';
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { ContactsList } from './ContactsList/ContactsList';
import { Notification } from './Notification/Notification';
import { MainContent } from './App.styled';

const firstContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem('contacts')) ?? firstContacts
  );
  const [filter, setFilter] = useState(``);

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = contact => {
    if (listContainsContact(contact)) {
      return alert(`${contact.name} is already in contacts.`);
    }
    setContacts(prev => [contact, ...prev]);
  };
  const listContainsContact = contact => {
    return contacts.some(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );
  };
  const onFilterChange = data => {
    setFilter(prevState => ({
      ...prevState,
      filter: data.toLowerCase(),
    }));
  };
  const handleContactDelete = event => {
    const idToDelete = event.currentTarget.id;
    const updatedContacts = [...contacts].filter(({ id }) => id !== idToDelete);

    setContacts(updatedContacts);
  };

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );
  const contactsListEmpty = contacts.length === 0 && filter === '';

  return (
    <MainContent>
      <h1>Phonebook</h1>
      <Form onSubmit={addContact} />

      <h2>Contacts</h2>
      {!contactsListEmpty && (
        <Filter onChange={onFilterChange} value={filter} />
      )}
      {!contactsListEmpty ? (
        <ContactsList
          contacts={filteredContacts}
          onDeleteClick={handleContactDelete}
        />
      ) : (
        <Notification title="Contacts list is empty" />
      )}
    </MainContent>
  );
};
