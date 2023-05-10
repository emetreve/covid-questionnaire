import PropTypes from 'prop-types';

export const InputPropTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  customClass: PropTypes.string,
  error: PropTypes.element,
};
