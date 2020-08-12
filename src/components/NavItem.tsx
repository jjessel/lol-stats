import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavItem.css';

interface NavItemProps {
    title: string;
}

function NavItem({ title }: NavItemProps) {
    return (
        <NavLink
            className="navItem"
            to={`/${title.toLowerCase()}`}
            activeStyle={{ color: 'white', borderBottom: '3px solid #0BC6E3' }}
        >
            {title}
        </NavLink>
    );
}

export default NavItem;
