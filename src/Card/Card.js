import React from "react";
import "./Card.css";

function Card({ title, genres, description, src }) {
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
          <button className="read-more-button">READ MORE</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
