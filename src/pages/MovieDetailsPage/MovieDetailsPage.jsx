import { Component } from 'react';
import axios from 'axios';
import { API_KEY } from '../../api-service/apiService';
import { BASE_URL } from '../../api-service/apiService';
import routes from '../../routes/routes';
import MovieDatails from '../../components/MovieDetails/MovieDetails';
import GoBackBtn from '../../components/GoBackBtn/GoBackBtn';
import AdditionalDetails from '../../components/AdditionalDetails/AdditionalDetails';

class MovieDetailsPage extends Component {
  state = {
    movie: {},
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

  handleGoBack = () => {
    const { location, history } = this.props;

    if (location.state && location.state.from) {
      return history.push(location.state.from);
    }
    history.replace(routes.HomePage);
  };

  render() {
    const { match, location } = this.props;
    const { movie, genres } = this.state;

    return (
      <div>
        <GoBackBtn onClick={this.handleGoBack} />
        <MovieDatails movie={movie} genres={genres} />
        <AdditionalDetails
          url={match.url}
          state={location.state}
          movieId={match.params.movieId}
        />
      </div>
    );
  }
}

export default MovieDetailsPage;
