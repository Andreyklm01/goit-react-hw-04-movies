import { Component } from 'react';
import { Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import MoviesPage from './pages/MoviesPage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import Cast from './pages/Cast';
import Reviews from './pages/Reviews';
class App extends Component {
  state = {
    movie: [],
  };

  render() {
    return (
      <>
        <Route path="/" exact component={Homepage} />
        <Route path="/moviesPage" component={MoviesPage} />
        <Route path="/MovieDetailsPage" component={MovieDetailsPage} />
        <Cast />
        <Reviews />
      </>
    );
  }
}

export default App;
