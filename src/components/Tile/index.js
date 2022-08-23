import React from "react";
import styles from "./tile.module.css";

export default function Tile({ dark }) {
  return (
    <div
      className={styles.tile}
      style={{
        backgroundColor: dark ? "rgb(118 150 86)" : "rgb(238 238 210)",
      }}
    ></div>
  );
}
