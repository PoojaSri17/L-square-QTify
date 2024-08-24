import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import styles from "./Section.module.css";
import { Box, CircularProgress, Tabs, Tab } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const Section = ({ title, endpoint, type, genres = [] }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = useState("all");

  // Custom theme for the Tabs
  const theme = createTheme({
    components: {
      MuiTabs: {
        styleOverrides: {
          indicator: {
            backgroundColor: "#34c94b",
          },
        },
      },
    },
    palette: {
      primary: {
        main: "#ffffff",
      },
    },
  });

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const filterSongs = () => {
    if (type === "songs" && value !== "all") {
      return data.filter((ele) => ele.genre?.key === value);
    }
    return data;
  };

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
            margin: "10px",
          }}
        >
          <CircularProgress color="success" />
          <p style={{ marginLeft: "10px" }}>Loading...</p>
        </Box>
      ) : (
        <>
          {type === "songs" && (
            <ThemeProvider theme={theme}>
              <Box sx={{ width: "100%", padding: "10px 20px" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  textColor="primary"
                  aria-label="Genre Filter Tabs"
                >
                  <Tab value="all" label="All" key="all" className={styles.genreTab} />
                  {genres.map((tab) => (
                    <Tab key={tab.key} value={tab.key} label={tab.label} className={styles.genreTab} />
                  ))}
                </Tabs>
              </Box>
            </ThemeProvider>
          )}
          <div className={toggle ? styles.cardsWrapper : styles.carouselWrapper}>
            {toggle ? (
              filterSongs().map((item) => (
                <Card key={item.id} data={item} type={type} />
              ))
            ) : (
              <Carousel
                data={filterSongs()}
                component={(item) => <Card key={item.id} data={item} type={type} />}
              />
            )}
          </div>
          {toggle && title === "Top Albums" && <hr className={styles.sectionSeparator} />}
        </>
      )}
    </div>
  );
};

export default Section;
