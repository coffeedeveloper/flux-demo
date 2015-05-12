import React from 'react';
import { NavLink } from 'fluxible-router';
import ApplicationStore from '../stores/ApplicationStore';

class Nav extends React.Component {
  constructor (props, context) {
    super(props, context);
  }
  render () {
    return (
      <ul>
        <li>
          <NavLink routeName="home">home</NavLink>
        </li>
        <li>
          <NavLink routeName="about">about</NavLink>
        </li>
        <li>
          <NavLink routeName="editor">editor</NavLink>
        </li>
      </ul>
    );
  }
}

Nav.contextTypes = {
  getStore: React.PropTypes.func,
  executeAction: React.PropTypes.func
};


export default Nav;
