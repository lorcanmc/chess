import React from "react";
import styles from "./tile.module.css";

export default function Tile({ dark, symbol }) {
  function FENToImg(letter) {
    const key = {
      p: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Chess_pdt60.png",
      P: "https://upload.wikimedia.org/wikipedia/commons/0/04/Chess_plt60.png",
      q: "https://upload.wikimedia.org/wikipedia/commons/a/af/Chess_qdt60.png",
      Q: "https://upload.wikimedia.org/wikipedia/commons/4/49/Chess_qlt60.png",
      k: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Chess_kdt60.png",
      K: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Chess_klt60.png",
      r: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Chess_rdt60.png",
      R: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Chess_rlt60.png",
      b: "https://upload.wikimedia.org/wikipedia/commons/8/81/Chess_bdt60.png",
      B: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Chess_blt60.png",
      n: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Chess_ndt60.png",
      N: "https://upload.wikimedia.org/wikipedia/commons/2/28/Chess_nlt60.png",
    };
    return key[letter];
  }

  return (
    <div
      className={styles.tile}
      style={{
        backgroundColor: dark ? "rgb(102, 142, 255)" : "rgb(202, 202, 255)",
      }}
    >
      {symbol ? <img className={styles.pieceImg} src={FENToImg(symbol)} alt="chess piece"></img> : <></>}
    </div>
  );
}
