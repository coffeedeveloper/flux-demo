import React from 'react';

const mountDom = document.querySelector('#app');

class Application extends React.Component {
  constructor () {
    super();
    console.log(this);
    console.log(this.context);
  }
  render () {
    return (
      <div>
        hello
      </div>
    );
  }
}

var Home = React.createClass({
  render: function () {
    console.log(this);
    console.log(this.context)
    return (
      <div>
        Home
      </div>
    );
  }
});

//React.render(<Home />, mountDom);
React.render(<Application />, mountDom);
