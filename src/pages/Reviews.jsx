import { Component } from 'react';
import axios from 'axios';
import { API_KEY } from '../api-service/apiService';
import { BASE_URL } from '../api-service/apiService';

class Reviews extends Component {
  state = {
    reviews: [],
  };

  getReviews = event => {
    event.preventDefault();
    axios
      .get(`${BASE_URL}movie/${this.props.id}/reviews?api_key=${API_KEY}`)
      .then(response => {
        return this.setState({
          reviews: response.data.results,
        });
      });
  };

  render() {
    console.log(this.state.reviews);
    return (
      <div>
        <button type="submit" onClick={this.getReviews}>
          reviews
        </button>
        <ul>
          {this.state.reviews.map(review => {
            const avatarAdapter = review.author_details.avatar_path.split('');
            avatarAdapter.splice(0, 1);
            const avatar = avatarAdapter.join('');

            return (
              <li key={review.id}>
                <img src={avatar} alt={review.autor} width="40" />
                <h3>{review.autor}</h3>
                <p>{review.content}</p>
                <p>{review.created_at}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Reviews;
