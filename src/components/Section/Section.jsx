import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../Card/Card'; 
import styles from './Section.module.css'; 

const Section = ({ title, endpoint }) => {
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(endpoint);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [endpoint]);
  
  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.header}>
        <p>{title}</p>
        <button className={styles.showAll} onClick={() => setToggle(!toggle)}>
          {toggle ? 'Collapse' : 'Show All'}
        </button>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className={`${styles.cardsWrapper} ${toggle ? styles.expanded : ''}`}>
          {data.length ? (
            data.slice(0, toggle ? data.length : 4).map((item) => (
              <Card key={item.id} data={item} type="album" />
            ))
          ) : (
            <p>No data available</p>
          )}
        </div>
      )}
      <hr className={styles.sectionSeparator} />
    </div>
  );
};

export default Section;

