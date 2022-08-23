import React from "react";
import Tile from "../Tile";
import styles from "./board.module.css";

console.log(Array(8).fill(null).map(() => Array(8)))

export default function Board() {
  return (
    <div className={styles.board}>
      {Array(8).fill(null).map(() => Array(8).fill(null)).map((row, j) => {
        return (
          <div className={styles.row} key={j}>
            {row.map((nan, i) => {
              return <Tile dark={(i + j) % 2} key={i} />;
            })}
          </div>
        );
      })}
    </div>
  );
}
