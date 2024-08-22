import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import styles from "./Section.module.css";
import { Box, CircularProgress } from "@mui/material";
import { fetchTopAlbum } from "../../api/api";

const Section = () => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Use fetchTopAlbum function to get data
        const data = await fetchTopAlbum();
        setAlbums(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.header}>
        <p>Top Albums</p>
        <p className={styles.showAll} onClick={handleToggle}>
          {toggle ? "Collapse" : "Show All"}
        </p>
      </div>
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "20px 0",
          }}
        >
          <CircularProgress color="primary" />
          <p style={{ marginLeft: "10px" }}>Loading...</p>
        </Box>
      ) : (
        <div className={`${styles.cardsWrapper} ${toggle ? styles.expanded : ""}`}>
          {albums.length > 0 ? (
            albums.map((album) => (
              <Card key={album.id} data={album} type="album" />
            ))
          ) : (
            <p>No albums available</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Section;
