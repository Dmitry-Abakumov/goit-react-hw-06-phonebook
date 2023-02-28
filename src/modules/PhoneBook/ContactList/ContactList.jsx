import { useSelector } from 'react-redux';

import ContactListItem from '../ContsctListItem/ContactListItem';
import Box from 'shared/components/Box/Box';

import {
  getFilteredContacts,
  getContacts,
} from 'redux/contacts/contacts-selectors';
import { getFilter } from 'redux/filter/filter-selectors';

const ContactList = () => {
  const filteredContacts = useSelector(getFilteredContacts);
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  return (
    <>
      <h3>Contacts</h3>
      {contacts.length > 0 && (
        <Box display="flex" flexDirection="column" gridGap={10} mt={10} as="ul">
          {filteredContacts?.map(({ name, id, number }) => (
            <ContactListItem key={id} name={name} number={number} id={id} />
          ))}
        </Box>
      )}

      {contacts.length === 0 && <p>You haven`t any contacts added yet</p>}

      {Boolean(filter && !filteredContacts.length) && <p>No matches found</p>}
    </>
  );
};

export default ContactList;
