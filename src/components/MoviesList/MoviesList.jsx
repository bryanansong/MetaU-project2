/* eslint-disable react/prop-types */
import MovieCard from "../MovieCard/MovieCard";
import "./MoviesList.css";

const MoviesList = ({ moviesList }) => {
  return (
    <>
      <div className="moviesList">
        {moviesList.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <div className="loadMore">
        <p>Load More</p>
      </div>
    </>
  );
};

export default MoviesList;
