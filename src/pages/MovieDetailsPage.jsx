//Доделать кнопку назад
//Добавить lazyLoad
// Сделать рефакторинг
// Добавить минимальніе стили
//обработать 404

import { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import axios from 'axios';
import { API_KEY } from '../api-service/apiService';
import { BASE_URL } from '../api-service/apiService';
import Cast from './Cast';
import Reviews from './Reviews';
import routes from '../routes/routes';

class MovieDetailsPage extends Component {
  state = {
    movie: [],
    genres: [],
  };

  componentDidMount() {
    const id = this.props.match.params.movieId;
    axios.get(`${BASE_URL}movie/${id}?api_key=${API_KEY}`).then(({ data }) => {
      return this.setState({
        movie: data,
        genres: data.genres,
      });
    });
  }

  handleClick = () => {
    const { location, history } = this.props;

    if (location.state && location.state.from) {
      return history.push(location.state.from);
    }
    history.push(routes.HomePage);
  };

  render() {
    const { match, location } = this.props;
    const {
      backdrop_path,
      title,
      release_date,
      vote_average,
      overview,
    } = this.state.movie;
    return (
      <div>
        <button type="button" onClick={this.handleClick}>
          Go Back
        </button>

        <img
          src={`https://image.tmdb.org/t/p/w300${backdrop_path}`}
          alt={title}
        />
        <h2>{title}</h2>
        <p>{release_date}</p>
        <p>User score: {vote_average}</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <ul>
          {this.state.genres.map(genre => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>

        <h3>Aditional infomation</h3>
        <div>
          <NavLink
            to={{
              pathname: `${match.url}/cast`,
              // state: {
              //   from: location.state,
              // },
            }}
          >
            <span>Cast</span>
          </NavLink>

          <NavLink
            to={{
              pathname: `${match.url}/reviews`,
              // state: {
              //   from: location.state,
              // },
            }}
          >
            <span>Reviews</span>
          </NavLink>
        </div>
        <div>
          <Switch>
            <Route
              path={`${match.url}/cast`}
              render={() => <Cast id={match.params.movieId} />}
            />
            <Route
              path={`${match.url}/reviews`}
              render={() => <Reviews id={match.params.movieId} />}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default MovieDetailsPage;
