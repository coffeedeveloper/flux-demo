import React from 'react';
import { NavLink } from 'fluxible-router';

class Nav extends React.Component {
  render () {
    return (
      <ul>
        <li>
          <NavLink routeName="home">home</NavLink>
        </li>
        <li>
          <NavLink routeName="about">about</NavLink>
        </li>
      </ul>
    );
  }
}

export default Nav;
