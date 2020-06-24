import React from "react";
import "./App.css";
import Home from "./containers/Home/index";
import Header from "./components/Header";
import Logo from "./components/Name";
import NavBar from "./containers/navbar";
import CardCounter from "./components/CardCounter";
import EachBlog from "./components/EachBlog";

function App() {
  return (
    <div>
      <NavBar />
      <Logo />
      <div className="App">
        <Home />
        <CardCounter />
      </div>
    </div>
  );
}

export default App;
