import React from 'react';
import logo from '../../assets/logo.png'; // Make sure to have the logo image here
import styles from './Logo.module.css';

const Logo = () => {
    return (
        <div className={styles.logo}>
            <img src={logo} alt="QTify Logo" />
        </div>
    );
};

export default Logo;
