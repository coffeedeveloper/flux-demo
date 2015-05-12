import React from 'react';
import SimpEditor from './SimpEditor';

class Editor extends React.Component {
  constructor (props, context) {
    super(props, context);
  }
  getHtml () {
    console.log(this.refs.editor.getValue());
  }
  destroy () {
    this.refs.editor.destroy();
  }
  render () {
    return (
      <div>
        <SimpEditor ref="editor" />
        <button type="button" onClick={this.getHtml.bind(this)}>GetHTML</button>
        <button type="button" onClick={this.destroy.bind(this)}>Destroy</button>
      </div>
    );
  }
}

export default Editor;
