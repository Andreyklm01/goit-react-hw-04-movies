import { Component } from 'react';
import axios from 'axios';
import { API_KEY } from '../api-service/apiService';
import { BASE_URL } from '../api-service/apiService';
class MovieDetailsPage extends Component {
  state = {
    movie: [],
    genres: [],
  };

  getMovie = event => {
    event.preventDefault();
    const id = '567189';
    axios.get(`${BASE_URL}movie/${id}?api_key=${API_KEY}`).then(response => {
      return this.setState({
        movie: response.data,
        genres: response.data.genres,
      });
    });
  };

  render() {
    console.log(this.state.movie);
    const {
      backdrop_path,
      title,
      release_date,
      vote_average,
      overview,
    } = this.state.movie;
    return (
      <div>
        <button type="submit" onClick={this.getMovie}>
          Click
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
        <p>Aditional infomation</p>
        //Cast //Reviews
      </div>
    );
  }
}

export default MovieDetailsPage;
