import MovieCard from "../MovieCard/MovieCard";
import "./MoviesList.css";

const MoviesList = ({ openModal, moviesList, loadMore }) => {
  return (
    <>
      <div className="moviesList">
        {moviesList.map((movie, index) => (
          <MovieCard key={index} movie={movie} openModal={openModal} />
        ))}
      </div>
      <div className="loadMore" onClick={loadMore}>
        <p>Load More</p>
      </div>
    </>
  );
};

export default MoviesList;
