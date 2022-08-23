import Board from "../Board";
import FENInput from "../FENInput";
import Tile from "../Tile";
import "./App.css";
import { useState } from "react";
import Peices from "../Peices";

function App() {
  const [FEN, setFEN] = useState("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR");

  return (
    <div className="App">
      <header className="App-header">
        <h1>Chess FEN Display</h1>
      </header>
      <FENInput setFEN={setFEN} />
      <div className="wrapper">
        <Board />
        <Peices FEN={FEN} />
      </div>
    </div>
  );
}

export default App;
