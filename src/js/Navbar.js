import React from 'react'
import { SkyLightStateless } from 'react-skylight'
import { connect } from 'react-redux'
import { showPopup, hidePopup } from './actions'

let NavbarImpl = React.createClass({
  render() {
    return (
      <div className='navbar navbar-default'>
        <div className='container-fluid'>
          <div className='navbar-header'>
            <span className='navbar-brand'>
              Movees.xyz
            </span>
          </div>
          <ul className='nav navbar-nav navbar-right'>
            <li><a href='#' onClick={() => this.props.onPopup('contact')}>Contact</a></li>
            <li><a href='#' onClick={() => this.props.onPopup('howto')}>How it works</a></li>
          </ul>
          <SkyLightStateless
            isVisible={this.props.contactPopup}
            title='Contact'
            onCloseClicked={() => this.props.offPopup('contact')}
            onOverlayClicked={() => this.props.offPopup('contact')}>
            Contact me here!
          </SkyLightStateless>
          <SkyLightStateless
            isVisible={this.props.howtoPopup}
            title='How it works'
            onCloseClicked={() => this.props.offPopup('howto')}
            onOverlayClicked={() => this.props.offPopup('howto')}>
            Howto here!
          </SkyLightStateless>
        </div>
      </div>
    )
  }
})

export default connect(
  (state) => {
    return {
      contactPopup: state.popups['contact'] || false,
      howtoPopup: state.popups['howto'] || false
    }
  },
  (dispatch) => {
    return {
      onPopup: (name) => {
        dispatch(showPopup(name))
      },
      offPopup: (name) => {
        dispatch(hidePopup(name))
      }
    }
  }
)(NavbarImpl)
