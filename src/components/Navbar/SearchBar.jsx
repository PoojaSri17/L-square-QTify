import React from 'react';
import styles from './SearchBar.module.css';

const SearchBar = () => {
    return (
        <div className={styles.searchBar}>
            <input type="text" placeholder="Search a song of your choice" />
            <button>Search</button>
        </div>
    );
};

export default SearchBar;
