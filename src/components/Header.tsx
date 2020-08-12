import React from 'react';
import NavItem from './NavItem';
import './Header.css';

interface HeaderProps {
    items: string[];
}

function Header({ items }: HeaderProps) {
    return (
        <div className="header">
            {items.map((item) => (
                <NavItem key={item} title={item} />
            ))}
        </div>
    );
}

export default Header;
