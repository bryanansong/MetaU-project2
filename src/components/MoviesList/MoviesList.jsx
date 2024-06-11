/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./MoviesList.css";

const MoviesList = ({ moviesList, loadMore }) => {
  return (
    <>
      <div className="moviesList">
        {moviesList.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
      <div className="loadMore" onClick={loadMore}>
        <p>Load More</p>
      </div>
    </>
  );
};

export default MoviesList;
