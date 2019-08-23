import React from "react";
import Collection from "../Collection/Collection";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <p className="collection-name">Popular</p>
      <Collection cardCount={4} sorting="popularity.desc"></Collection>
      <Link to="/popular" className="view-more-button">
        VIEW MORE
      </Link>
      <p className="collection-name">Best rated</p>
      <Collection cardCount={4} sorting="vote_average.desc"></Collection>
      <Link to="/best-rated" className="view-more-button">
        VIEW MORE
      </Link>
      <p className="collection-name">New</p>
      <Collection cardCount={4} sorting="release_date.desc"></Collection>
      <Link to="/new" className="view-more-button">
        VIEW MORE
      </Link>
    </div>
  );
}

export default Home;
