import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import toastr from 'toastr';

import Box from 'shared/components/Box/Box';
import Input from 'shared/components/Input/Input.styled';

import { addContact } from 'redux/contacts/contacts-slice';

import { getContacts } from 'redux/contacts/contacts-selectors';

import 'shared/utils/toastr-config';
import 'toastr/build/toastr.min.css';

const PhoneBookForm = () => {
  const [fields, setFields] = useState({
    name: '',
    number: '',
  });

  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();

  const onInputChange = useCallback(({ target }) => {
    setFields(prevFields => ({
      ...prevFields,
      [target.name]: target.value,
    }));
  }, []);

  const isDublicate = enteredName => {
    return contacts.some(
      ({ name }) => name.toLowerCase() === enteredName.toLowerCase()
    );
  };

  const onSubmitForm = e => {
    e.preventDefault();

    if (isDublicate(name))
      return toastr.warning(`${name} is already in contacts`);

    dispatch(addContact({ ...fields }));

    reset();
  };

  const reset = useCallback(() => {
    setFields({ name: '', number: '' });
  }, []);

  const { name, number } = fields;

  return (
    <Box
      mt={10}
      mb={10}
      display="flex"
      justifyContent="center"
      border="1px solid black"
      gridGap={50}
      pt={50}
      pb={50}
      as="form"
      onSubmit={onSubmitForm}
    >
      <label>
        name
        <Input
          onChange={onInputChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
        />
      </label>
      <label>
        phone number
        <Input
          onChange={onInputChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
        />
      </label>

      <button>Add contact</button>
    </Box>
  );
};

export default memo(PhoneBookForm);
