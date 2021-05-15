import PropTypes from 'prop-types';

const SearchForm = ({ onSubmit, searchQuery, onChange }) => (
  <form action="" onSubmit={onSubmit}>
    <input
      type="text"
      value={searchQuery}
      autoComplete="off"
      autoFocus
      placeholder="Search movie"
      onChange={onChange}
    />
    <button type="submit">Search</button>
  </form>
);

SearchForm.propTypes = {
  onSubmit: PropTypes.func,
  searchQuery: PropTypes.string,
  onChange: PropTypes.func,
};

export default SearchForm;
