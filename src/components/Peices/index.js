import React from "react";
import Piece from "../Piece";
import styles from "./peices.module.css";


export default function Peices({ FEN }) {
  // turns FEN into a 2D Array
  const boardConfig = FEN.split(" ")[0]
    .split("/")
    .map((row) => {
      let symbolArr = [];
      for (let i = 0; i < row.length; i++) {
        if (parseInt(row[i])) {
          symbolArr.push(...Array(parseInt(row[i])).fill(""));
        } else {
          symbolArr.push(row[i]);
        }
      }
      return symbolArr;
    });

    console.log(boardConfig)

  return (
    <div className={styles.board}>
      {boardConfig.map((row, j) => {
        return (
          <div className={styles.row} key={j}>
            {row.map((symbol, i) => {
              return <Piece dark={(i + j) % 2} symbol={symbol} key={i} />;
            })}
          </div>
        );
      })}
    </div>
  );
}
