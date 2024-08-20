import React from 'react';
import Logo from './Logo';
import SearchBar from './SearchBar';
import Button from './Button';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <Logo />
            <SearchBar />
            <Button text="Give Feedback" />
        </nav>
    );
};

export default Navbar;
