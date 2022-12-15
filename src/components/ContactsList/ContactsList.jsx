import { ContactsItem } from 'components/ContactsItem/ContactsItem';
import { Notification } from 'components/Notification/Notification';
import PropTypes from 'prop-types';
import { List } from './ContactsList.styled';

export const ContactsList = ({ contacts, onDeleteClick }) => {
  if (contacts.length === 0) {
    return <Notification title="No contact with such name found" />;
  }

  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ContactsItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDeleteClick={onDeleteClick}
        />
      ))}
    </List>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteClick: PropTypes.func.isRequired,
};
