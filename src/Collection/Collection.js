import React from "react";
import Card from "../Card/Card";
import "./Collection.css";
import { API_KEY } from "../constants.js";

class Collection extends React.Component {
  state = {
    status: "success",
    movies: [],
  };
  componentDidMount() {
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=" + API_KEY)
      .then(response => response.json())
      .then(response => {
        this.setState({
          movies: response.results.map(movie => {
            return {
              title: movie.original_title,
              description: movie.overview,
              src: "https://image.tmdb.org/t/p/w500" + movie.poster_path,
              genres: movie.genre_ids,
            };
          }),
        });
      });
  }
  render() {
    console.log(this.state.movies);
    return (
      <div className="collection">
        {this.state.movies.map((movie, index) => {
          return (
            <Card
              key={index}
              title={movie.title}
              src={movie.src}
              genres={movie.genres}
              description={movie.description}
            />
          );
        })}
      </div>
    );
  }
}

export default Collection;
