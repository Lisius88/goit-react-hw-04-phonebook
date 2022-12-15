import PropTypes from 'prop-types';
import { Item, Button } from './ContactsItem.styled';

export const ContactsItem = ({ id, name, number, onDeleteClick }) => (
  <Item>
    <span>
      {name}: <a href={'tel:number'}>{number}</a>
    </span>
    <Button onClick={onDeleteClick} id={id} type="button">
      x
    </Button>
  </Item>
);

ContactsItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};
