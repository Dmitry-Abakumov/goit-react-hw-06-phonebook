import Box from 'shared/components/Box/Box';
import Input from 'shared/components/Input/Input.styled';
import { useSelector, useDispatch } from 'react-redux';
import { memo } from 'react';

import { setFilter } from 'redux/filter/filter-slice';
import { getFilter } from 'redux/filter/filter-selectors';
import { getContacts } from 'redux/contacts/contacts-selectors';

const PhoneBookFilter = () => {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();

  return (
    <>
      {contacts.length > 0 && (
        <Box mb={10} as="label">
          Find contacs by name
          <Input
            onChange={({ target }) => dispatch(setFilter(target.value))}
            name="filter"
            value={filter}
          />
        </Box>
      )}
    </>
  );
};

export default memo(PhoneBookFilter);
