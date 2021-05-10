import { Component } from 'react';
import axios from 'axios';
import { API_KEY } from '../api-service/apiService';
import { BASE_URL } from '../api-service/apiService';

class Cast extends Component {
  state = {
    cast: [],
  };

  getCast = event => {
    event.preventDefault();
    const id = '567189';
    axios
      .get(`${BASE_URL}movie/${id}/credits?api_key=${API_KEY}`)
      .then(response => {
        return this.setState({
          cast: response.data.cast,
        });
      });
  };

  render() {
    return (
      <div>
        <button type="submit" onClick={this.getCast}>
          Cast
        </button>
        <ul>
          {this.state.cast.map(actor => {
            return (
              <li key={actor.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w92/${actor.profile_path}`}
                  alt={actor.name}
                />
                <h3>{actor.name}</h3>
                <p>{actor.character}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Cast;
