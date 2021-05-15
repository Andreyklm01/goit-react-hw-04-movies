import { Component } from 'react';
import axios from 'axios';
import { API_KEY } from '../../api-service/apiService';
import { BASE_URL } from '../../api-service/apiService';
import NotFoundView from '../NotFoundView/NotFoundView';
import MovieList from '../../components/MovieList/MovieList';
import SearchForm from '../../components/SearchForm/SearchForm';

class MoviesPage extends Component {
  state = {
    searchMovies: [],
    searchQuery: '',
    notFound: false,
  };
  componentDidMount() {
    const savedMovies = localStorage.getItem('movies');
    const parsedMovies = JSON.parse(savedMovies);
    if (parsedMovies) {
      this.setState({ searchMovies: parsedMovies });
    }
  }

  componentDidUpdate(_, prevState) {
    if (this.state.searchMovies !== prevState.searchMovies) {
      localStorage.setItem('movies', JSON.stringify(this.state.searchMovies));
    }
  }

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
      .then(({ data }) => {
        data.results.length > 0
          ? this.setState({
              searchMovies: data.results,
              notFound: false,
            })
          : this.setState({ notFound: true });
      });
  };

  render() {
    const { searchQuery, searchMovies, notFound } = this.state;
    return (
      <div>
        <SearchForm
          onSubmit={this.fetchMovieBySearch}
          searchQuery={searchQuery}
          onChange={this.handleChange}
        />

        {!notFound ? (
          <MovieList movies={searchMovies} location={this.props.location} />
        ) : (
          <NotFoundView />
        )}
      </div>
    );
  }
}

export default MoviesPage;
