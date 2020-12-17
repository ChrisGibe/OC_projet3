import React from "react";
import MovieCard from "../MovieCard/MovieCard";

import "./Movies.css";
import { MoviesItems } from "../../moviesItems/moviesItems";

const Movies = () => {
  return (
    <>
    <h2>Les films</h2>
      <div id="films" className="movies">
        {
          MoviesItems.map((movie) => (
            <MovieCard
            image={movie.image}
            title={movie.title}
            date={movie.date}
            realisator={movie.realisator}
            scenario={movie.scenario}
            actors={movie.actors}
            kind={movie.kind}
            duration={movie.duration}
            trailer={movie.trailer}
          />
          ))
        }
      </div>
    </>
  );
};

export default Movies;
