import React from "react";
import { Chip } from "@mui/material";
import styles from "./Card.module.css";

const Card = ({ data }) => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.card}>
        <div className={styles.cardImgWrapper}>
          <img className={styles.cardImg} src={data.image} alt={data.title} />
        </div>
        <div className={styles.followsWrapper}>
          <Chip
            label={`${(data.follows / 1000).toFixed(1)}k Follows`}
            className={styles.followsChip}
            size="small"
          />
        </div>
      </div>
      <h3 className={styles.albumTitle}>{data.title}</h3>
    </div>
  );
};

export default Card;