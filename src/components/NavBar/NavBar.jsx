import s from './Navbar.module.css';
import routes from '../../routes/routes';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <ul className={s.list}>
    <li className={s.item}>
      <NavLink
        exact
        className={s.navLink}
        activeClassName={s.navLinkActive}
        to={routes.HomePage}
      >
        Home
      </NavLink>
    </li>
    <li className={s.item}>
      <NavLink
        className={s.navLink}
        activeClassName={s.navLinkActive}
        to={routes.MoviesPage}
      >
        Movies
      </NavLink>
    </li>
  </ul>
);

export default NavBar;
