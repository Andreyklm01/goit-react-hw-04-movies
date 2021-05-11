import { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { API_KEY } from '../api-service/apiService';
import { BASE_URL } from '../api-service/apiService';

class Homepage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    await axios
      .get(`${BASE_URL}trending/all/day?api_key=${API_KEY}`)
      .then(response => {
        return this.setState({ movies: response.data.results });
      });
  }

  render() {
    console.log(this.props.match.url);
    return (
      <ul>
        {this.state.movies.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`/MovieDetailsPage/${movie.id}`}>
                {movie.title || movie.name}
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Homepage;
