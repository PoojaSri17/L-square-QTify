import React from 'react';
import styles from "./Hero.module.css";
import heroImage from "../../assets/hero.png";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div>
        <h1> 100 Thousand Songs, ad - free </h1>
        <h1> Over thousands podcast episodes</h1>
      </div>
      <img src={heroImage} alt="Hero_Image" />
    </div>
  );
};

export default Hero;