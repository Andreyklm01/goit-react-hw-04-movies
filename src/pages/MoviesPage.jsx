import { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { API_KEY } from '../api-service/apiService';
import { BASE_URL } from '../api-service/apiService';

class MoviesPage extends Component {
  state = {
    searchMovies: [],
    searchQuery: '',
  };

  handleChange = event => {
    this.setState({
      searchQuery: event.target.value,
    });
  };

  fetchMovieBySearch = event => {
    event.preventDefault();
    const query = this.state.searchQuery;
    if (!query) return;

    axios
      .get(`${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}&page=1`)
      .then(response => {
        return this.setState({ searchMovies: response.data.results });
      });
    this.setState({ searchQuery: '' });
  };

  render() {
    const { searchQuery } = this.state;
    console.log(searchQuery);
    return (
      <div>
        <form action="" onSubmit={this.fetchMovieBySearch}>
          <input
            type="text"
            value={searchQuery}
            autoComplete="off"
            autoFocus
            placeholder="Search movie"
            onChange={this.handleChange}
          />
          <button type="submit">Search</button>
        </form>
        <ul>
          {this.state.searchMovies.map(movie => {
            return (
              <Link to={`/movies/${movie.id}`}>
                <li key={movie.id}>{movie.title || movie.name}</li>
              </Link>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default MoviesPage;
