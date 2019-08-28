import React from "react";
import Cast from "../Cast/Cast";
import Trailer from "../Trailer/Trailer";
import "./Movie.css";
import { API_KEY } from "../constants.js";

class Movie extends React.Component {
  state = {
    movie: {},
    trailer: {},
    cast: [],
  };
  componentDidMount() {
    if (this.props.match.params.id)
      fetch(
        "https://api.themoviedb.org/3/movie/" +
          this.props.match.params.id +
          "?api_key=" +
          API_KEY
      )
        .then(response => response.json())
        .then(movie => {
          this.setState({
            movie: {
              title: movie.original_title,
              description: movie.overview,
              src:
                movie.poster_path &&
                "https://image.tmdb.org/t/p/w500" + movie.poster_path,
              genres: movie.genre_ids,
              id: movie.id,
            },
          });
        });
    fetch(
      "https://api.themoviedb.org/3/movie/" +
        this.props.match.params.id +
        "/videos?api_key=" +
        API_KEY
    )
      .then(response => response.json())
      .then(trailer => {
        this.setState({
          trailer: {
            trailerSrc: trailer.results[0] && trailer.results[0].key,
          },
        });
      });
    fetch(
      "https://api.themoviedb.org/3/movie/" +
        this.props.match.params.id +
        "/credits?api_key=" +
        API_KEY
    )
      .then(cast => cast.json())
      .then(cast => {
        this.setState({
          cast: cast.cast.map(actor => {
            return {
              name: actor.name,
              character: actor.character,
              src:
                actor.profile_path &&
                "https://image.tmdb.org/t/p/w500" + actor.profile_path,
            };
          }),
        });
      });
  }
  render() {
    console.log(this.state.cast);
    return (
      <div>
        <p className="title"> {this.state.movie.title}</p>
        <Trailer src={this.state.trailer.trailerSrc} />
        <div className="movie-details">
          <img className="movie-poster" src={this.state.movie.src} alt="" />
          <div className="movie-info">
            <ul className="all-movie-genres">
              <li className="movie-genre">{this.state.movie.genres}</li>
            </ul>
            <p className="movie-description">{this.state.movie.description}</p>
          </div>
        </div>
        <p className="cast-text">Cast:</p>
        <div className="cast">
          <Cast cast={this.state.cast} />
        </div>
      </div>
    );
  }
}

export default Movie;
