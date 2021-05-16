import { Component } from 'react';
import axios from 'axios';
import { API_KEY } from '../../api-service/apiService';
import { BASE_URL } from '../../api-service/apiService';
import imgNotAvaviable from '../../img/No_image_available.png';
import s from './Cast.module.css';

class Cast extends Component {
  state = {
    cast: [],
  };

  componentDidMount() {
    axios
      .get(`${BASE_URL}movie/${this.props.id}/credits?api_key=${API_KEY}`)
      .then(response => {
        return this.setState({
          cast: response.data.cast,
        });
      });
  }

  render() {
    return (
      <div>
        {this.state.cast.length !== 0 ? (
          <ul className={s.list}>
            {this.state.cast.map(actor => {
              return (
                <li key={actor.id} className={s.item}>
                  {actor.profile_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w92/${actor.profile_path}`}
                      alt={actor.name}
                      className={s.photo}
                    />
                  ) : (
                    <img
                      src={imgNotAvaviable}
                      alt="no avaliable"
                      width="92"
                      className={s.photo}
                    />
                  )}

                  <h3 className={s.name}>{actor.name}</h3>
                  <p className={s.name}>Character: {actor.character}</p>
                </li>
              );
            })}
          </ul>
        ) : (
          <h3>Not found</h3>
        )}
      </div>
    );
  }
}

export default Cast;
