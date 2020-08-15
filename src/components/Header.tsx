import React from 'react';
import NavItem from './NavItem';
import './Header.css';
import { NavigationItem } from '../models/NavigationItem';

interface HeaderProps {
    items: NavigationItem[];
}

const Header: React.FC<HeaderProps> = ({ items }: HeaderProps) => {
    return (
        <div className="header">
            {items.map((item) => (
                <NavItem key={item.name} navigationItem={item} />
            ))}
        </div>
    );
};

export default Header;
