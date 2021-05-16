import { Component } from 'react';
import axios from 'axios';
import { API_KEY } from '../../api-service/apiService';
import { BASE_URL } from '../../api-service/apiService';
import s from './Reviews.module.css';

class Reviews extends Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    axios
      .get(`${BASE_URL}movie/${this.props.id}/reviews?api_key=${API_KEY}`)
      .then(response => {
        return this.setState({
          reviews: response.data.results,
        });
      });
  }

  render() {
    return (
      <div>
        {this.state.reviews.length !== 0 ? (
          <ul className={s.list}>
            {this.state.reviews.map(review => {
              const avatarPath = review.author_details.avatar_path;
              if (!avatarPath) return '';
              const avatarAdapter = avatarPath.split('');
              avatarAdapter.splice(0, 1);
              const avatar = avatarAdapter.join('');

              return (
                <li key={review.id} className={s.item}>
                  <div className={s.autor}>
                    <img
                      src={avatar}
                      alt={review.author}
                      width="40"
                      height="40"
                    />
                    <h3 className={s.name}>{review.author}</h3>
                  </div>
                  <p>{review.content}</p>
                  <p>{review.created_at}</p>
                </li>
              );
            })}
          </ul>
        ) : (
          <h2 className={s.subtitle}>No reviews</h2>
        )}
      </div>
    );
  }
}

export default Reviews;
