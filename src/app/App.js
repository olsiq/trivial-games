import React from "react";
import { Provider } from "react-redux";
import { store } from "../redux";
import { Game, GameLayout, Header } from "../components";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <GameLayout>
          <Game />
        </GameLayout>
      </div>
    </Provider>
  );
}

export default App;
