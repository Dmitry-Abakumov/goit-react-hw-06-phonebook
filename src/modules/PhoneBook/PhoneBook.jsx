import { useSelector } from 'react-redux';

import PhoneBookForm from './PhoneBookForm/PhoneBookForm';
import ContactList from './ContactList/ContactList';
import PhoneBookFilter from './PhoneBookFilter/PhoneBookFilter';
import Box from 'shared/components/Box/Box';

import {
  getContacts,
  getFilteredContacts,
} from 'redux/contacts/contacts-selectors';
import { getFilter } from 'redux/filter/filter-selectors';

import 'shared/utils/toastr-config';

const PhoneBook = () => {
  const contacts = useSelector(getContacts);
  const filteredContacts = useSelector(getFilteredContacts);
  const filter = useSelector(getFilter);

  return (
    <Box pt={50} pl={15} pr={15} textAlign="center" as="section">
      <h2>Phonebook</h2>
      <PhoneBookForm />
      {contacts.length ? (
        <Box border="1px solid black" pt={50} pb={50}>
          <PhoneBookFilter />
          <h3>Contacts</h3>
          <ContactList />
          {Boolean(filter && !filteredContacts.length) && (
            <p>No matches found</p>
          )}
        </Box>
      ) : (
        <p>You haven`t any contacts added yet</p>
      )}
    </Box>
  );
};

export default PhoneBook;
