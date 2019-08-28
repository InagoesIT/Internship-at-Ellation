import React from "react";
import "./Cast.css";

function Cast({ cast }) {
  return (
    <div className="cast">
      {cast &&
        cast.map((actor, id) => (
          <div className="actor-details">
            <img className="actor-image" src={actor.src} alt="" />
            <div className="actor-info">
              <p className="actor-name">{actor.name}</p>
              <p>Role played: </p>
              <p className="role-played">{actor.character}</p>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Cast;
