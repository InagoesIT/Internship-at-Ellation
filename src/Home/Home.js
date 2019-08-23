import React from "react";
import Collection from "../Collection/Collection";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Collection cardCount={4} sorting="vote_count.desc"></Collection>
    </div>
  );
}

export default Home;
