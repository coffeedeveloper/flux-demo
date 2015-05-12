import React from 'react';
import { navigateAction } from 'fluxible-router';

class About extends React.Component {
  constructor (props, context) {
    super(props, context);
  }
  onClick () {
    this.props.context.executeAction(navigateAction, {url: '/'});
  }
  render () {
    return (
      <div>
        <h1>About</h1>
        <button onClick={this.onClick.bind(this)}>redirect to Home</button>
      </div>
    );
  }
}

export default About;
