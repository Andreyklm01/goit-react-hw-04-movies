import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import MoviesPage from './pages/MoviesPage/MoviesPage';
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage';
import NavBar from './components/NavBar/NavBar';

import NotFoundView from './pages/NotFoundView/NotFoundView';
import routes from './routes/routes';

class App extends Component {
  state = {
    movie: [],
  };

  render() {
    return (
      <>
        <NavBar />
        <Switch>
          <Route exact path={routes.HomePage} component={Homepage} />
          <Route exact path={routes.MoviesPage} component={MoviesPage} />
          <Route path={routes.MovieDetailsPage} component={MovieDetailsPage} />
          <Route component={NotFoundView} />
        </Switch>
      </>
    );
  }
}

export default App;
