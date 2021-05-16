import imgNotAvaviable from '../../img/No_image_available.png';
import PropTypes from 'prop-types';
import s from './MovieDetails.module.css';

const MovieDetails = ({ movie, genres }) => (
  <div>
    {movie.backdrop_path ? (
      <img
        src={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`}
        alt={movie.title}
        className={s.poster}
      />
    ) : (
      <img
        src={imgNotAvaviable}
        alt="no poster"
        width="300"
        className={s.poster}
      />
    )}
    <h2 className={s.movieTitle}>{movie.title}</h2>
    <p className={s.item}>Release date: {movie.release_date}</p>
    <p className={s.item}>User score: {movie.vote_average}</p>
    <h3 className={s.title}>Overview</h3>
    <p className={s.descr}>{movie.overview}</p>
    <h3 className={s.title}>Genres</h3>
    <ul className={s.list}>
      {genres.map(genre => (
        <li key={genre.id} className={s.genres}>
          {genre.name}
        </li>
      ))}
    </ul>
  </div>
);

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    release_date: PropTypes.string,
    backdrop_path: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
  }),

  genres: PropTypes.arrayOf(PropTypes.shape),
};
export default MovieDetails;
