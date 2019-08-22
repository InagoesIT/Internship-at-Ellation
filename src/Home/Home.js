import React from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Link to="about">Go To About Page</Link>
      <Card movieId="1"></Card>
    </div>
  );
}

export default Home;
