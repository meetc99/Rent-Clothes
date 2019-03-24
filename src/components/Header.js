import React from 'react'

const Header = ({ existingTokens, newTokens, subscriptionExpiry }) => (
  <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
    <a className='navbar-brand' href='#'>
      Tanveer Singh Taneja
    </a>
    <button
      className='navbar-toggler'
      type='button'
      data-toggle='collapse'
      data-target='#navbarText'
      aria-controls='navbarText'
      aria-expanded='false'
      aria-label='Toggle navigation'
    >
      <span className='navbar-toggler-icon' />
    </button>
    <div className='collapse navbar-collapse' id='navbarText'>
      <ul className='navbar-nav mr-auto'>
        <li className='nav-item active'>
          <a className='nav-link' >
            New ({newTokens}) <span className='sr-only'>(current)</span>
          </a>
        </li>
        <li className='nav-item active'>
          <a className='nav-link'>
            Existing ({existingTokens})
          </a>
        </li>

      </ul>
      <span className='navbar-text'>Current subscription is ending on {subscriptionExpiry} <a href='#'>Renew Now</a></span>
    </div>
  </nav>
)

export default Header
