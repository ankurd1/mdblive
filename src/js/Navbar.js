import React from 'react'

export default React.createClass({
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
            <li><a href='#'>Contact</a></li>
            <li><a href='#'>How it works</a></li>
          </ul>
        </div>
      </div>
    )
  }
})
