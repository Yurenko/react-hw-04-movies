import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import style from './Header.module.css';

function Header() {
  return (
    <div className={style.header}>
      <NavLink
        exact
        to="/"
        className={style.link}
        activeClassName={style.active}
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className={style.link}
        activeClassName={style.active}
      >
        Movie
      </NavLink>
    </div>
  );
}

export default withRouter(Header);
