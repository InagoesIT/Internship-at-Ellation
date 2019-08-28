import React from "react";
import Card from "../Card/Card";
import "./Collection.css";
import { API_KEY } from "../constants.js";

class Collection extends React.Component {
  state = {
    movies: [],
  };
  componentDidMount() {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=" +
        API_KEY +
        "&sort_by=" +
        this.props.sorting
    )
      .then(response => response.json())
      .then(response => {
        this.setState({
          movies: response.results.map(movie => {
            return {
              title: movie.original_title,
              description: movie.overview,
              src:
                movie.poster_path &&
                "https://image.tmdb.org/t/p/w500" + movie.poster_path,
              genres: movie.genre_ids,
              id: movie.id,
            };
          }),
        });
      });
  }
  render(props) {
    return (
      <div className="collection">
        {this.state.movies
          .slice(0, this.props.cardCount)
          .map((movie, index) => {
            return (
              <Card
                key={index}
                title={movie.title}
                src={movie.src}
                genres={movie.genres}
                description={movie.description}
                to={"/movie/" + movie.id}
              />
            );
          })}
      </div>
    );
  }
}

export default Collection;
