import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainMenu } from "./features/MainMenu";
import { GameSave } from "./features/GameSave";
import { Game } from "./features/Game";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<MainMenu />} />
        <Route path="/gamesave" element={<GameSave />} />
        <Route path="/game" element={<Game />} />
        {/*<Route path="/battle" element={<Battle />} />*/}
      </Routes>
    </Router>
  );
}

export default App;
