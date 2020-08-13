import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavItem.css';
import { NavigationItem } from '../models/NavigationItem';

interface NavItemProps {
    navigationItem: NavigationItem;
}

const NavItem: React.FC<NavItemProps> = ({ navigationItem }: NavItemProps) => {
    return (
        <NavLink
            className="navItem"
            exact
            to={navigationItem.path}
            activeStyle={{ color: 'white', borderBottom: '3px solid #0BC6E3' }}
        >
            {navigationItem.name}
        </NavLink>
    );
};

export default NavItem;
