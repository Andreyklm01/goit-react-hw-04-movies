import { Component } from 'react';
import { Route, Link, NavLink, Switch } from 'react-router-dom';
import Homepage from './pages/Homepage';
import MoviesPage from './pages/MoviesPage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import Cast from './pages/Cast';
import Reviews from './pages/Reviews';
import NotFoundView from './pages/NotFoundView';

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
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav-link"
              activeClassName="nav-link--active"
              to="/moviesPage"
            >
              Movies
            </NavLink>
          </li>
        </ul>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/moviesPage" component={MoviesPage} />
          <Route path="/MovieDetailsPage" component={MovieDetailsPage} />
          <Route component={NotFoundView} />
        </Switch>
        <Cast />
        <Reviews />
      </>
    );
  }
}

export default App;
