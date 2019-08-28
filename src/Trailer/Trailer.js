import React from "react";
import "./Trailer.css";

function Trailer({ src }) {
  return (
    <div>
      {src ? (
        <iframe
          className="trailer"
          src={"https://www.youtube.com/embed/" + src}
        />
      ) : (
        <img
          className="trailer-not-found"
          src="https://linuxliaison.org/wp-content/uploads/2017/10/Screenshot-from-2017-10-16-23-05-56.png"
          alt=""
        />
      )}
    </div>
  );
}

export default Trailer;
