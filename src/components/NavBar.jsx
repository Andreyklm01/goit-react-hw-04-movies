import s from './Navbar.module.css';
const NavBar = () => (
  <ul>
    <li>
      <NavLink
        exact
        className={s.navLink}
        activeClassName={s.navLinkActive}
        to="/"
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        className={s.navLink}
        activeClassName={s.navLinkActive}
        to="/moviesPage"
      >
        Movies
      </NavLink>
    </li>
  </ul>
);

export default NavBar;
