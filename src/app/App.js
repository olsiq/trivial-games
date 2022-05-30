import React from "react";
import { Card, Game, GameLayout } from "../components";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">header</header>
      <GameLayout>
        <Game />
      </GameLayout>
    </div>
  );
}

export default App;
