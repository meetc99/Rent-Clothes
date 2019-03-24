import React from 'react'
import { NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';

const TabNavItem = ({label, activeTab, onClickHandler}) => (
    <NavItem>
        <NavLink
        className={classnames({ active: activeTab })}
        onClick={onClickHandler}
        >
        {label}
        </NavLink>
    </NavItem>
)

export default TabNavItem