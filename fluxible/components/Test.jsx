import React from 'react';
import ApplicationStore from '../stores/ApplicationStore';

class Test extends React.Component {
  render () {
    return (
      <div>
        test
      </div>
    );
  }
}

Test.contextTypes = {
  getStore: React.PropTypes.func,
  executeAction: React.PropTypes.func
};


export default Test;
