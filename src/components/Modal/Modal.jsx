import { useEffect } from "react";
import "./Modal.css";

const Modal = ({movie, isModalVisible, closeModal, updateMovie}) => {
  const toggleWatched = () => {
    const updatedMovie = {...movie};
    updatedMovie.watched = updatedMovie?.watched ? false :  true;
    updateMovie(updatedMovie);
  }

  const toggleLiked = () => {
    const updatedMovie = {...movie};
    updatedMovie.liked = updatedMovie?.liked ? false :  true;
    updateMovie(updatedMovie);
  }

  return (
    <div className="modal-container" onClick={() => {closeModal()}} style={{ display: `${isModalVisible && "none"}`}}>
      <div className="modal-content" onClick={(event) => {event.stopPropagation()}}>
        <div className="modal-movie-background">
          <img src={
          movie?.backdrop_path
            ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
            : "https://placehold.co/1111x623/EEE/31343C?font=montserrat&text=No+Movie+Cover"
        } alt="Movie backdrop" />
        </div>
        <div className="modal-movie-cover">
          <img src={
          movie?.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : "https://placehold.co/260x390?text=No+Cover+Art&font=montserrat"
          } alt="Movie poster" />
          <div className={`modal-toggle-watch-btn ${movie?.watched && "watched"}`} onClick={() => {toggleWatched()}}>
                {movie?.watched ? <p>Remove from Watchlist</p> : <p>Add to Watchlist</p> }
          </div>
          <div className={`modal-toggle-like-btn ${movie?.liked && "liked"}`} onClick={() => {toggleLiked()}}>
                {movie?.liked ? <p>Remove Like</p> : <p>Like Movie</p> }
          </div>
        </div>
        <div className="modal-movie-content">
          <h1 className="modal-movie-title">{movie.title}</h1>
            <p>Genre: movie.genre    |    Release Date: {movie.release_date}</p>
          <h3>Description:</h3>
          <p className="modal-movie-overview">{movie.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
