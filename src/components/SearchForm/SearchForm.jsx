import PropTypes from 'prop-types';
import s from './SearchForm.module.css';

const SearchForm = ({ onSubmit, searchQuery, onChange }) => (
  <form action="" onSubmit={onSubmit}>
    <input
      className={s.input}
      type="text"
      value={searchQuery}
      autoComplete="off"
      autoFocus
      placeholder="Search movie"
      onChange={onChange}
    />
    <button type="submit" className={s.button}>
      Search
    </button>
  </form>
);

SearchForm.propTypes = {
  onSubmit: PropTypes.func,
  searchQuery: PropTypes.string,
  onChange: PropTypes.func,
};

export default SearchForm;
