import PropTypes from 'prop-types';
import { Filterlabel } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  const handleInputChange = event => {
    onChange(event.currentTarget.value);
  };

  return (
    <Filterlabel>
      <label>
        Find contacts by name
        <input onChange={handleInputChange} value={value} type="text" />
      </label>
    </Filterlabel>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
