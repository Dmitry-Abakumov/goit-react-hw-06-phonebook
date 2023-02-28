export const getContacts = ({ contacts }) => contacts;

export const getFilteredContacts = ({ contacts, filter }) => {
  const normilizedEnteredName = filter.toLowerCase();

  if (!filter) return contacts;

  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(normilizedEnteredName)
  );
};
