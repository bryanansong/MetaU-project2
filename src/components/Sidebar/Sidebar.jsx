import { useEffect, useState } from "react";
import "./Sidebar.css";

const Sidebar = ({
  likedMovies,
  watchedMovies,
  sidebarOpened,
  setSidebarOpened,
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
          {likedList.map((movie, index) => (
            <p key={index}>{movie.title}</p>
          ))}
        </div>
        <div className="watched-movies">
          <h1>Watched Movies</h1>
          {wathcedList.map((movie, index) => (
            <p key={index}>{movie.title}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
