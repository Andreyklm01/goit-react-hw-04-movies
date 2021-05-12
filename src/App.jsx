import { Component } from 'react';
import { Route, Link, NavLink, Switch } from 'react-router-dom';
import Homepage from './pages/Homepage';
import MoviesPage from './pages/MoviesPage';
import MovieDetailsPage from './pages/MovieDetailsPage';

import NotFoundView from './pages/NotFoundView';
import routes from './routes/routes';

class App extends Component {
  state = {
    movie: [],
  };

  render() {
    return (
      <>
        <ul>
          <li>
            <NavLink
              exact
              className="nav-link"
              activeClassName="nav-link--active"
              to={routes.HomePage}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav-link"
              activeClassName="nav-link--active"
              to={routes.MoviesPage}
            >
              Movies
            </NavLink>
          </li>
        </ul>
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
