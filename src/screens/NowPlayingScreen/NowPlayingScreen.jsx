import "./NowPlayingScreen.css";
import MoviesList from "../../components/MoviesList/MoviesList";
import { useEffect, useState } from "react";
import FilterOptions from "../../components/FilterOptions/FilterOptions";

const NowPlayingScreen = ({ openModal, addMovieAttributes }) => {
  const [moviesList, setMoviesList] = useState([]);
  const [lastPageNumber, setLastPageNumber] = useState(1);
  const [sortType, setSortType] = useState("none");

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
      .then((response) => addMovieAttributes(response.results))
      .then((response) => setMoviesList([...moviesList, ...response]))
      .catch((err) => console.error(err));
  };

  const getSortedResults = (list) => {
    if (!list) return [];
    switch (sortType) {
      case "title_asc":
        return [...list].sort((a, b) => a.title.localeCompare(b.title));
      case "title_desc":
        return [...list].sort((a, b) => b.title.localeCompare(a.title));
      case "popularity":
        return [...list].sort((a, b) => b.popularity - a.popularity);
      case "date":
        return [...list].sort(
          (a, b) => new Date(b.release_date) - new Date(a.release_date)
        );
      case "vote_average":
        return [...list].sort((a, b) => b.vote_average - a.vote_average);
      default:
        return list;
    }
  };

  const loadMore = () => {
    fetchMovieInformation(lastPageNumber + 1);
    setLastPageNumber(lastPageNumber + 1);
  };

  useEffect(() => {
    fetchMovieInformation();
  }, []);

  useEffect(() => {
    setMoviesList(getSortedResults(moviesList));
  }, [sortType]);

  return (
    <div className="nowPlaying">
      <h1 className="nowPlaying-title">NOW PLAYING</h1>
      <FilterOptions setSortType={setSortType} />
      <MoviesList
        openModal={openModal}
        moviesList={moviesList}
        loadMore={loadMore}
      />
    </div>
  );
};

export default NowPlayingScreen;
