import React from "react";
import "./Card.css";

function Card() {
  return (
    <div className="grid">
      <div className="card">
        <img
          className="card-image"
          src="https://images-na.ssl-images-amazon.com/images/I/91dDv9WOcFL.jpg"
          alt="The image of the book Sherlock Holmes"
        />
        <div className="card-content">
          <ul className="all-movie-genres">
            <li className="movie-genre">Detective</li>
            <li className="movie-genre">Murder</li>
            <li className="movie-genre">Mistery</li>
          </ul>
          <h1 className="movie-title">"Sherlock Holmes"</h1>
          <p className="movie-description">
            Blablaabm gthsfhtg 6ytrfgb ytrfdgfb yrfdgh. ghtrdg .
          </p>
          <button class="read-more-button"> READ MORE</button>
        </div>
      </div>
      <div className="card">
        <img
          className="card-image"
          src="https://upload.wikimedia.org/wikipedia/en/4/4a/And_Then_There_Were_None_First_Edition_Cover_1939.jpg"
          alt="The image of the book And then there were none"
        />
        <div className="card-content">
          <ul className="all-movie-genres">
            <li className="movie-genre">Detective</li>
            <li className="movie-genre">Murder</li>
            <li className="movie-genre">Mistery</li>
          </ul>
          <h1 className="movie-title">"And then there were none"</h1>
          <p className="movie-description">
            Blablaabm gthsfhtg 6ytrfgb ytrfdgfb yrfdgh. ghtrdg .
          </p>
          <button class="read-more-button"> READ MORE</button>
        </div>
      </div>
      <div className="card">
        <img
          className="card-image"
          src="https://images-na.ssl-images-amazon.com/images/I/A15FFg6aNLL.jpg"
          alt="The image of the book The Da Vinci Code"
        />
        <div className="card-content">
          <ul className="all-movie-genres">
            <li className="movie-genre">Detective</li>
            <li className="movie-genre">Murder</li>
            <li className="movie-genre">Mistery</li>
          </ul>
          <h1 className="movie-title">"The Da Vinci Code"</h1>
          <p className="movie-description">
            Blablaabm gthsfhtg 6ytrfgb ytrfdgfb yrfdgh. ghtrdg . sgfshdsjh. jhg
          </p>
          <button class="read-more-button"> READ MORE</button>
        </div>
      </div>
      <div className="card">
        <img
          className="card-image"
          src="https://images-na.ssl-images-amazon.com/images/I/91C-9nqSkrL.jpg"
          alt="The image of the book Eeny Meeny"
        />
        <div className="card-content">
          <ul className="all-movie-genres">
            <li className="movie-genre">Detective</li>
            <li className="movie-genre">Murder</li>
            <li className="movie-genre">Mistery</li>
          </ul>
          <h1 className="movie-title">"Eeny Meeny"</h1>
          <p className="movie-description">
            Blablaabm gthsfhtg 6ytrfgb ytrfdgfb yrfdgh. ghtrdg .
          </p>
          <button class="read-more-button"> READ MORE</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
