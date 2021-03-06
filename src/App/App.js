import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Movie from "../Movie/Movie";

import Home from "../Home/Home";
import About from "../About/About";
import New from "../New/New";
import Popular from "../Popular/Popular";
import Best_Rated from "../Best_Rated/Best_Rated";

function App() {
  document.title = "Movie Fan";
  return (
    <Router>
      <div className="app">
        <Header
          logoText="Logo ruler"
          menu={[
            { link: "/popular", title: "Popular" },
            { link: "/new", title: "New" },
            { link: "/search", title: "Search" },
          ]}
          imageSrc="https://www.freelogodesign.org/file/app/client/thumb/804a5679-237d-466d-9f3e-d4b4033330d5_200x200.png?1566561612010"></Header>
        <div className="app-content">
          <Route exact path="/" component={Home}></Route>
          <Route path="/about" exact component={About}></Route>
          <Route path="/new" exact component={New}></Route>
          <Route path="/popular" exact component={Popular}></Route>
          <Route path="/best-rated" exact component={Best_Rated}></Route>
          <Route path="/movie/:id" exact component={Movie}></Route>
        </div>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
