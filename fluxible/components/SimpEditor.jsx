import React from 'react';
import Simditor from 'simditor';
import $ from 'jquery';

class SimpEditor extends React.Component {
  constructor (props, context) {
    super(props, context);
    this.editor = null;
    this.state = {
      className: `simpeditor ${this.props.className}`
    };
  }
  componentDidMount () {
    const textarea = React.findDOMNode(this.refs.textarea);
    this.editor = new Simditor({
      textarea: $(textarea)
    });
  }
  componentWillUnmount () {
    this.editor = null;
  }
  getValue () {
    if (this.editor) {
      return this.editor.getValue();
    }
    return '';
  }
  destroy () {
    if (this.editor) {
      return this.editor.destroy();
    }
    return null;
  }
  render () {
    return (
      <div className={this.state.className}>
        <textarea ref="textarea"></textarea>
      </div>
    );
  }
}

SimpEditor.defaultProps = {
  className: ''
};

export default SimpEditor;
