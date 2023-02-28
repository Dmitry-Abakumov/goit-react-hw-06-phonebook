import { useSelector } from 'react-redux';

import ContactListItem from '../ContsctListItem/ContactListItem';
import Box from 'shared/components/Box/Box';

import { getFilteredContacts } from 'redux/contacts/contacts-selectors';

const ContactList = () => {
  const filteredContacts = useSelector(getFilteredContacts);

  return (
    <Box display="flex" flexDirection="column" gridGap={10} mt={10} as="ul">
      {filteredContacts?.map(({ name, id, number }) => (
        <ContactListItem key={id} name={name} number={number} id={id} />
      ))}
    </Box>
  );
};

export default ContactList;
