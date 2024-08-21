import React, { useState } from 'react';
import searchIcon from '../../assets/searchIcon.svg';
import styles from './SearchBar.module.css';
import navbarStyles from '../Navbar/Navbar.module.css';

const SearchBar = ({ data, page }) => {
  const [value, setValue] = useState('');
  const [search, setSearch] = useState([]);

  const handleInput = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);

    // Ensure `data` is an array before calling `filter`
    if (Array.isArray(data)) {
      const filteredResults = data.filter((album) =>
        album.title.toLowerCase().includes(inputValue.toLowerCase())
      );
      setSearch(filteredResults);
    } else {
      // Handle the case where `data` is not an array
      console.error('Data is not an array or is undefined');
      setSearch([]); // Clear the search results if data is invalid
    }
  };

  const handleSubmit = (e) => {
    console.log('click');
  };

  return (
    <div>
      <div className={navbarStyles.searchField}>
        <input
          type="search"
          placeholder={
            page === 'home'
              ? 'Search an Album of Your Choice'
              : 'Search a song of Your Choice'
          }
          value={value}
          onChange={handleInput}
        />
        <div>
          <img
            src={searchIcon}
            alt='Search Icon'
            onClick={handleSubmit}
            className={styles.searchIcon}
          />
        </div>
      </div>
      <div className={styles.searchResultWrapper}>
        {value.length > 0 && (
          <div className={styles.searchResult}>
            {!search.length ? (
              <h1 className={styles.notFound}>No Match Found!</h1>
            ) : (
              search.map((album) => (
                <div className={styles.albumWrapper} key={album.id}>
                  <div className={styles.imgWrapper}>
                    <img
                      src={album.image}
                      alt=''
                      className={styles.albumImg}
                    />
                  </div>
                  <div className={styles.albumHeadingWrapper}>
                    <p className={styles.albumTitle}>{album.title}</p>
                    <p className={styles.artists}>
                      {page === 'home'
                        ? album.songs[0].artists.join(', ')
                        : album.artists.join(', ')}
                      .....
                    </p>
                  </div>
                  <div className={styles.followersWrapper}>
                    <p className={styles.followers}>
                      {page === 'home' && album.follows && (
                        <>{(album.follows / 1000).toFixed(1)}k Follows</>
                      )}
                      {page === 'song' && album.likes && (
                        <>{(album.likes / 1000).toFixed(1)}k💖</>
                      )}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
