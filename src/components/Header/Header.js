import React from 'react'
import PropTypes from 'prop-types'

import './header.less'

const Header = ({ header, subHeader }) => (
  <div className="header">
    <div className="header__baseline">
      <h1 className="header__baseline__logo">{`${header}`}</h1>
      <p className="header__baseline__description">{subHeader}</p>
      <ul className="header__nav">
        <li className="header__nav__item">
          {/* <Link to='/about'> */}
            About
          {/* </Link> */}
        </li>
        <li className="header__nav__item">
          {/* <Link to='/contact'> */}
            Contact
          {/* </Link> */}
        </li>
      </ul>
    </div>
  </div>
)

Header.propTypes = {
  bgColor:    PropTypes.string,
  header:     PropTypes.string,
  subHeader:  PropTypes.string
}

export default Header
