import React from 'react';
import ApplicationStore from '../stores/ApplicationStore';

class Home extends React.Component {
  render () {
    return (
      <h1>Home</h1>
    );
  }
}

Home.contextTypes = {
  getStore: React.PropTypes.func,
  executeAction: React.PropTypes.func
};

export default Home;
