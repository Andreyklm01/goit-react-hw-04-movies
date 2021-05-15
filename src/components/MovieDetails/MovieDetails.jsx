import imgNotAvaviable from '../../img/No_image_available.png';
import PropTypes from 'prop-types';

const MovieDetails = ({ movie, genres }) => (
  <div>
    {console.log(movie)}
    {movie.backdrop_path ? (
      <img
        src={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`}
        alt={movie.title}
      />
    ) : (
      <img src={imgNotAvaviable} alt="no poster" width="300" />
    )}
    <h2>{movie.title}</h2>
    <p>{movie.release_date}</p>
    <p>User score: {movie.vote_average}</p>
    <h3>Overview</h3>
    <p>{movie.overview}</p>
    <h3>Genres</h3>
    <ul>
      {genres.map(genre => (
        <li key={genre.id}>{genre.name}</li>
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
