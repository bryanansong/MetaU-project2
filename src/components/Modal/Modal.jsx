import { useState } from "react";
import "./Modal.css";

const Modal = ({
  movie,
  closeModal,
  updateModalMovie,
  likedMovies,
  setLikedMovies,
  watchedMovies,
  setWatchedMovies,
}) => {
  const [trailerUrl, setTrailerUrl] = useState(null);

  const updateLikesList = (updatedMovie) => {
    setLikedMovies((prevLikedMovies) => {
      const isLiked = prevLikedMovies?.includes(updatedMovie.id);
      return isLiked
        ? prevLikedMovies.filter((id) => id !== updatedMovie.id)
        : [...prevLikedMovies, updatedMovie.id];
    });
  };

  const toggleLikedButton = () => {
    const updatedMovie = { ...movie };
    updatedMovie.liked = updatedMovie?.liked ? false : true;
    updateLikesList(updatedMovie);
    updateModalMovie(updatedMovie);
  };

  const updateWatchedList = (updatedMovie) => {
    setWatchedMovies((prevWatchedMovies) => {
      const hasWathced = prevWatchedMovies?.includes(updatedMovie.id);
      return hasWathced
        ? prevWatchedMovies.filter((id) => id !== updatedMovie.id)
        : [...prevWatchedMovies, updatedMovie.id];
    });
  };

  const toggleWatchedButton = () => {
    const updatedMovie = { ...movie };
    updatedMovie.watched = updatedMovie?.watched ? false : true;
    updateWatchedList(updatedMovie);
    updateModalMovie(updatedMovie);
  };

  const getModalVideo = async (movieId) => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const videosUrl = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`;

    const trailerUrl = await fetch(videosUrl)
      .then((response) => response.json())
      .then((response) =>
        response.results.find(
          (video) => video.site === "YouTube" && video.type === "Trailer"
        )
      )
      .then((trailer) => `https://www.youtube.com/embed/${trailer.key}`)
      .catch((error) => {
        console.error("Error fetching movie trailer:", error);
      });
    console.log("Trailer: ", trailerUrl);
    setTrailerUrl(trailerUrl);
  };

  useState(() => {
    getModalVideo(movie.id);
  }, [movie]);

  return (
    <div
      className="modal-container"
      onClick={() => {
        closeModal();
      }}
    >
      <div
        className="modal-content"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <div className="modal-movie-background">
          <img
            src={
              movie?.backdrop_path
                ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
                : "https://placehold.co/1111x623/EEE/31343C?font=montserrat&text=No+Movie+Cover"
            }
            alt="Movie backdrop"
          />
        </div>
        <div className="modal-movie-cover">
          <img
            src={
              movie?.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : "https://placehold.co/260x390?text=No+Cover+Art&font=montserrat"
            }
            alt="Movie poster"
          />
          <div
            className={`modal-toggle-watch-btn ${
              watchedMovies.includes(movie.id) && "watched"
            }`}
            onClick={() => {
              toggleWatchedButton();
            }}
          >
            {watchedMovies.includes(movie.id) ? (
              <p>Remove from Watchlist</p>
            ) : (
              <p>Add to Watchlist</p>
            )}
          </div>
          <div
            className={`modal-toggle-like-btn ${
              likedMovies.includes(movie.id) && "liked"
            }`}
            onClick={() => {
              toggleLikedButton();
            }}
          >
            {likedMovies.includes(movie.id) ? (
              <p>Remove Like</p>
            ) : (
              <p>Like Movie</p>
            )}
          </div>
        </div>
        <div className="modal-movie-content">
          <h1 className="modal-movie-title">{movie.title}</h1>
          <p>Genre: movie.genre | Release Date: {movie.release_date}</p>
          <h3>Description:</h3>
          <p className="modal-movie-overview">{movie.overview}</p>
          {trailerUrl ? (
            <iframe
              src={trailerUrl}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Movie Trailer"
              className="modal-movie-trailer"
            ></iframe>
          ) : (
            <img
              src="https://placehold.co/560x315?text=No+Video+Found&font=Montserrat"
              className="modal-movie-trailer"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
