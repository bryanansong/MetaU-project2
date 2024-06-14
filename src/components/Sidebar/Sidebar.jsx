import { useEffect, useState } from "react";
import "./Sidebar.css";

const Sidebar = ({
  likedMovies,
  watchedMovies,
  sidebarOpened,
  setSidebarOpened,
  openModal,
}) => {
  const [likedList, setLikedList] = useState([]);
  const [wathcedList, setWatchedList] = useState([]);

  const getMovieListFromIDs = (ids) => {
    const resultList = [];

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYjdiNDBjODkyMGJjNzMyODk1MTU0M2IyM2MwMjg3YSIsInN1YiI6IjY2Njc2NDY0YTdmNzVmZDVhODFjMzAyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C6GUy0On998UxcO7SY7sKs6S06ECbxQJ_Vsav1vGusw",
      },
    };

    for (const id of ids) {
      fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
        .then((response) => response.json())
        .then((result) => {
          resultList.push(result);
        })
        .catch((err) =>
          console.error(`Error fetching movie with ID ${id}:`, err)
        );
    }

    return resultList;
  };

  useEffect(() => {
    setLikedList(getMovieListFromIDs(likedMovies));
    setWatchedList(getMovieListFromIDs(watchedMovies));
  }, [likedMovies, watchedMovies]);

  return (
    <div
      className={`sidebar-container ${
        sidebarOpened ? "container-opened" : "container-closed"
      }`}
      onClick={() => {
        setSidebarOpened(false);
      }}
    >
      <div
        className={`sidebar-content ${sidebarOpened ? "content-opened" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sidebar-close" onClick={() => setSidebarOpened(false)}>
          <div className="sidebar-close-button">
            <p>Close Sidebar</p>
          </div>
        </div>
        <div className="liked-movies">
          <h1>Liked Movies</h1>
          <div className="sidebar-movies-list">
            {likedList.map((movie, index) => (
              <div
                key={index}
                className="sidebar-movie-item"
                onClick={() => {
                  setSidebarOpened(false);
                  openModal(movie);
                }}
              >
                <img
                  src={
                    movie?.poster_path
                      ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                      : "https://placehold.co/260x390?text=No+Cover+Art&font=montserrat"
                  }
                  className="sidebar-movie-item-image"
                  alt="Movie Cover Art"
                />

                <p className="sidebar-movie-title">{movie.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="watched-movies">
          <h1>Watched Movies</h1>
          <div className="sidebar-movies-list">
            {wathcedList.map((movie, index) => (
              <div
                key={index}
                className="sidebar-movie-item"
                onClick={() => {
                  setSidebarOpened(false);
                  openModal(movie);
                }}
              >
                <img
                  src={
                    movie?.poster_path
                      ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                      : "https://placehold.co/260x390?text=No+Cover+Art&font=montserrat"
                  }
                  className="sidebar-movie-item-image"
                  alt="Movie Cover Art"
                />

                <p className="sidebar-movie-title">{movie.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
