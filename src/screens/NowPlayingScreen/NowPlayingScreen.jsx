import "./NowPlayingScreen.css";
import MoviesList from "../../components/MoviesList/MoviesList";
import { useEffect, useState } from "react";

const NowPlayingScreen = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [lastPageNumber, setLastPageNumber] = useState(1);

  const fetchMovieInformation = (pageNumber = 1) => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYjdiNDBjODkyMGJjNzMyODk1MTU0M2IyM2MwMjg3YSIsInN1YiI6IjY2Njc2NDY0YTdmNzVmZDVhODFjMzAyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C6GUy0On998UxcO7SY7sKs6S06ECbxQJ_Vsav1vGusw",
      },
    };

    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${pageNumber}`,
      options
    )
      .then((response) => response.json())
      .then((response) => setMoviesList([...moviesList, ...response.results]))
      .catch((err) => console.error(err));
  };

  const loadMore = () => {
    fetchMovieInformation(lastPageNumber + 1);
    setLastPageNumber(lastPageNumber + 1);
  };

  useEffect(() => {
    fetchMovieInformation();
  }, []);

  return (
    <div className="nowPlaying">
      <h1>NOW PLAYING</h1>
      <MoviesList moviesList={moviesList} loadMore={loadMore} />
    </div>
  );
};

export default NowPlayingScreen;
