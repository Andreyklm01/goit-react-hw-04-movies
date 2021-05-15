import PropTypes from 'prop-types';

const GoBackBtn = ({ onClick }) => (
  <button type="button" onClick={onClick}>
    Go Back
  </button>
);

GoBackBtn.propTypes = {
  onClick: PropTypes.func,
};
export default GoBackBtn;
