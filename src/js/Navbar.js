import React from 'react'
import { SkyLightStateless } from 'react-skylight'
import { connect } from 'react-redux'
import { showPopup, hidePopup } from './actions'
import { trackEvent } from './analytics'

let contactPopupStyle = {
  width: '40%',
  height: '200px',
  marginTop: '-100px',
  marginLeft: '-20%',
  borderRadius: '10px'
}
let howtoPopupStyle = {
  height: '300px',
  marginTop: '-150px',
  borderRadius: '10px'
}

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
            dialogStyles={contactPopupStyle}
            isVisible={this.props.contactPopup}
            title='Contact'
            onCloseClicked={() => this.props.offPopup('contact')}
            onOverlayClicked={() => this.props.offPopup('contact')}>
            This project is open sourced on <a href='https://github.com/legalosLOTR/mdblive'>github</a>.
            For any complaints/suggestions/feedback, please open an issue.
          </SkyLightStateless>
          <SkyLightStateless
            dialogStyles={howtoPopupStyle}
            isVisible={this.props.howtoPopup}
            title='How it works'
            onCloseClicked={() => this.props.offPopup('howto')}
            onOverlayClicked={() => this.props.offPopup('howto')}>
            <ul>
              <li>Movees.xyz helps you to visualize your movie collection and decide what to watch next.</li>
              <li>Click the 'Choose File' button and select a directory that contains all your movies. Then click the 'Go!' button.</li>
              <li>The app will look for movie files in the directory recurively, so you just need to select your top level movies folder. Once it finds some movie files, it will fetch details from IMDB and display them in a searchable/sortable UI.</li>
              <li>Note that your movie files are not uploaded to any server! The app just looks at the file names.</li>
              <li>Enjoy! :)</li>
            </ul>
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
        trackEvent({
          eventCategory: 'popup',
          eventAction: name
        })
        dispatch(showPopup(name))
      },
      offPopup: (name) => {
        dispatch(hidePopup(name))
      }
    }
  }
)(NavbarImpl)
