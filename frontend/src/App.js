import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

import Routes from "./routes";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
