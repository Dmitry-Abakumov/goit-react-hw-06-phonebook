import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import Box from 'shared/components/Box/Box';

import { deleteContact } from 'redux/contacts/contacts-slice';

const ContactListItem = ({ name, number, id }) => {
  
  const dispatch = useDispatch();

  return (
    <Box display="flex" gridGap={10} justifyContent="center" as="li">
      {name}: {number}
      <button onClick={() => dispatch(deleteContact(id))} type="button">
        delete
      </button>
    </Box>
  );
};

export default ContactListItem;

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
