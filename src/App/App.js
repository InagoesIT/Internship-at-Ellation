import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import Home from "../Home/Home";
import About from "../About/About";

function App() {
  return (
    <Router>
      <div className="app">
        <Header
          logoText="Logo ruler"
          menu={["Popular", "New", "Search"]}
          imageSrc="https://cdn.pixabay.com/photo/2017/07/04/23/41/white-wings-2473023_960_720.png"></Header>
        <div className="app-content">
          <Route exact path="/" component={Home}></Route>
          <Route path="/about" exact component={About}></Route>
        </div>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
