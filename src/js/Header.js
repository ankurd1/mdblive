import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { addFile, clearDisplay } from './actions'
import { trackEvent } from './analytics'

var HeaderImpl = React.createClass({
  setupInputNode(node) {
    // Hack because react's <input> doesn't support this yet
    node.setAttribute('webkitdirectory', '');
    node.setAttribute('mozdirectory', '');

    this._inputNode = node;
  },

  render() {
    return (
      <div className='row form-inline header-box'>
        <span className='col-xs-offset-4 col-xs-6 col-md-offset-8 col-md-3'><input className='form-control' ref={this.setupInputNode} type='file' name='selector-box'/></span>
        <span className='col-xs-2 col-md-1'><button className='btn btn-success' onClick={this.goButtonClicked}>Go!</button></span>
      </div>
    );
  },

  goButtonClicked() {
    if (this._inputNode) {
      trackEvent({
        eventCategory: 'selection',
        eventAction: 'go_click',
        eventValue: this._inputNode.files.length
      })
      this.props.onFilesPicked();
      var files = this._inputNode.files;
      for (var i = 0; i < files.length; i++) {
        this.props.onEachFile(files[i]);
      }
    }
  }
});

var Header = connect(
  () => { return {} },
  (dispatch) => {
    return {
      onEachFile: (file) => {
        dispatch(addFile(file));
      },
      onFilesPicked: () => {
        dispatch(clearDisplay());
      }
    }
  }
)(HeaderImpl)

module.exports = Header;
