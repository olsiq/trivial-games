import React from "react";
import { Card, Game, GameLayout, Header } from "../components";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <GameLayout>
        <Game />
      </GameLayout>
    </div>
  );
}

export default App;
