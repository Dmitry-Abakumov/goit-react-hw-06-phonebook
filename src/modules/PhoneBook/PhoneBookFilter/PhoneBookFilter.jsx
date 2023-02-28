import Box from 'shared/components/Box/Box';
import Input from 'shared/components/Input/Input.styled';
import { useSelector, useDispatch } from 'react-redux';
import { memo } from 'react';

import { setFilter } from 'redux/filter/filter-slice';
import { getFilter } from 'redux/filter/filter-selectors';

const PhoneBookFilter = () => {
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  return (
    <Box mb={10} as="label">
      Find contacs by name
      <Input
        onChange={({ target }) => dispatch(setFilter(target.value))}
        name="filter"
        value={filter}
      />
    </Box>
  );
};

export default memo(PhoneBookFilter);
