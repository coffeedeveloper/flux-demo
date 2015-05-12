import React from 'react';
import { connectToStores, provideContext } from 'fluxible/addons';
import { handleHistory } from 'fluxible-router';

import ApplicationStore from '../stores/ApplicationStore';
import Nav from './Nav';

class Application extends React.Component {
  constructor (props, context) {
    super(props, context);
  }
  render () {
    var Handle = this.props.currentRoute.get('handle');
    return (
      <div>
        <Nav />
        <Handle context={this.context} />
      </div>
    );
  }
}

Application.contextTypes = {
  getStore: React.PropTypes.func,
  executeAction: React.PropTypes.func
};

Application = connectToStores(
  Application,
  [ApplicationStore],
  (stores, props) => {
    return {
      ApplicationStore: stores.ApplicationStore.getState()
    };
  }
);

Application = handleHistory(Application, {enableScroll: false});

Application = provideContext(Application);

export default Application;
