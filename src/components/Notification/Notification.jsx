import PropTypes from 'prop-types';

export const Notification = ({ title }) => (
  <p style={{ textAlign: 'center' }}>{title}</p>
);

Notification.propTypes = {
  title: PropTypes.string.isRequired,
};
