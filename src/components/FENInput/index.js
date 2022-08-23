import React from "react";
import { useState } from "react";
import styles from "./FENInput.module.css";

export default function FENInput({ setFEN }) {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleClick() {
    setFEN(text);
  }

  return (
    <div style={{ padding: "20px" }}>
      <input onChange={handleChange} placeholder="paste your FEN here" />
      <button onClick={handleClick}>Update</button>
    </div>
  );
}
