import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

function Card({ title, genres, description, src, to }) {
  return (
    <div className="grid">
      <div className="card">
        <img
          className="card-image"
          src={
            src
              ? src
              : "https://www.dansk.nl/dcc/themes/danskn/assets/img/theme/notfound.png"
          }
          alt=""
        />
        <div className="card-content">
          <ul className="all-movie-genres">
            {genres.map((genre, id) => (
              <li key={id} className="movie-genre">
                {genre}
              </li>
            ))}
          </ul>
          <h1 className="movie-title">{title}</h1>
          <p className="movie-description">{description}</p>
          <Link to={to} className="read-more-button">
            READ MORE
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
