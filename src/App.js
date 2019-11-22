import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Title from "./components/Title";
import LikeCounter from "./components/LikeComponent";
import Fetch from "./components/Fetch";

function App() {
  return (
    <div className="App">
      <main>
        <Title content="Some Simple Title" />
      </main>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Fetch />
        </p>
        <LikeCounter />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Welcome to Codaisseur!!!
        </a>
      </header>
    </div>
  );
}

export default App;
