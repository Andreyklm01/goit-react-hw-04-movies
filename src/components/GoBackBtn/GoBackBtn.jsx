import PropTypes from 'prop-types';
import s from './GoBackBtn.module.css';

const GoBackBtn = ({ onClick }) => (
  <button className={s.button} type="button" onClick={onClick}>
    Go Back
  </button>
);

GoBackBtn.propTypes = {
  onClick: PropTypes.func,
};
export default GoBackBtn;
