import React from 'react'
import { NavItem, NavLink } from 'reactstrap'
import classnames from 'classnames'
import PropTypes from 'prop-types'

const TabNavItem = ({ label, activeTab, onClickHandler }) => (
  <NavItem>
    <NavLink
      className={classnames({ active: activeTab })}
      onClick={onClickHandler}
    >
      {label}
    </NavLink>
  </NavItem>
)

TabNavItem.propTypes = {
  label: PropTypes.string.isRequired,
  activeTab: PropTypes.bool.isRequired,
  onClickHandler: PropTypes.func.isRequired
}

export default TabNavItem
