import { Component } from 'react';
import axios from 'axios';
import { API_KEY } from '../../api-service/apiService';
import { BASE_URL } from '../../api-service/apiService';
import MovieList from '../../components/MovieList/MovieList';

class Homepage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    await axios
      .get(`${BASE_URL}trending/all/week?api_key=${API_KEY}`)
      .then(response => {
        return this.setState({ movies: response.data.results });
      });
  }

  render() {
    return (
      <MovieList movies={this.state.movies} location={this.props.location} />
    );
  }
}

export default Homepage;
