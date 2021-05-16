import { Suspense, lazy } from 'react';
import { Route, Switch, NavLink, withRouter } from 'react-router-dom';
import s from './AdditionalDetails.module.css';

const Cast = lazy(() =>
  import('../../pages/Cast/Cast' /*webpackChunkName: "cast"*/),
);
const Reviews = lazy(() =>
  import('../../pages/Reviews/Reviews' /*webpackChunkName: "reviews"*/),
);

const AdditionalDetails = ({ url, state, movieId }) => (
  <>
    <h3 className={s.title}>Aditional infomation</h3>
    <div className={s.list}>
      <NavLink
        className={s.navLink}
        activeClassName={s.active}
        to={{
          pathname: `${url}/cast`,
          state: {
            from: state && state.from,
          },
        }}
      >
        Cast
      </NavLink>

      <NavLink
        className={s.navLink}
        activeClassName={s.active}
        to={{
          pathname: `${url}/reviews`,
          state: {
            from: state && state.from,
          },
        }}
      >
        Reviews
      </NavLink>
    </div>

    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path={`${url}/cast`} render={() => <Cast id={movieId} />} />
        <Route
          path={`${url}/reviews`}
          render={() => <Reviews id={movieId} />}
        />
      </Switch>
    </Suspense>
  </>
);

export default withRouter(AdditionalDetails);
