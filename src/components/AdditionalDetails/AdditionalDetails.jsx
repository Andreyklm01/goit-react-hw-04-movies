import { Route, Switch, NavLink, withRouter } from 'react-router-dom';
import Cast from '../../pages/Cast/Cast';
// import NotFoundView from '../pages/NotFoundView';
import Reviews from '../../pages/Reviews/Reviews';

const AdditionalDetails = ({ url, state, movieId }) => (
  <>
    <h3>Aditional infomation</h3>
    <div>
      <NavLink
        to={{
          pathname: `${url}/cast`,
          state: {
            from: state && state.from,
          },
        }}
      >
        <span>Cast</span>
      </NavLink>

      <NavLink
        to={{
          pathname: `${url}/reviews`,
          state: {
            from: state && state.from,
          },
        }}
      >
        <span>Reviews</span>
      </NavLink>
    </div>

    <Switch>
      <Route path={`${url}/cast`} render={() => <Cast id={movieId} />} />
      <Route path={`${url}/reviews`} render={() => <Reviews id={movieId} />} />
    </Switch>
  </>
);

export default withRouter(AdditionalDetails);
