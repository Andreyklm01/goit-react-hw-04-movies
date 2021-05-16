import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './MovieList.module.css';

const MovieList = ({ movies, location }) => (
  <ul>
    {movies.map(movie => {
      return (
        <li key={movie.id} className={s.item}>
          <Link
            to={{
              pathname: `/movies/${movie.id}`,
              state: {
                from: location,
              },
            }}
          >
            {movie.title || movie.name}
          </Link>
        </li>
      );
    })}
  </ul>
);
MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape),
};

export default withRouter(MovieList);
