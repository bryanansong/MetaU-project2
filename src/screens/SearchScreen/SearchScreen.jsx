import { useEffect, useState } from "react";
import "./SearchScreen.css";
import FilterOptions from "../../components/FilterOptions/FilterOptions";
import MoviesList from "../../components/MoviesList/MoviesList";

const SearchScreen = ({openModal}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [lastPageNumber, setLastPageNumber] = useState(0);
  const [searchResults, setSearchResults] = useState([]);
  const [sortType, setSortType] = useState("none");

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

  const getSearchResults = (more = false) => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYjdiNDBjODkyMGJjNzMyODk1MTU0M2IyM2MwMjg3YSIsInN1YiI6IjY2Njc2NDY0YTdmNzVmZDVhODFjMzAyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C6GUy0On998UxcO7SY7sKs6S06ECbxQJ_Vsav1vGusw",
      },
    };

    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=${
        lastPageNumber + 1
      }`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        const sortedResults = getSortedResults(response.results);
        setSearchResults(
          more ? [...searchResults, ...sortedResults] : sortedResults
        );
      })
      .catch((err) => console.error(err));
  };

  const loadMore = () => {
    getSearchResults(true);
    setSortType("none");
    setLastPageNumber(lastPageNumber + 1);
  };

  useEffect(() => {
    setLastPageNumber(0);
    getSearchResults();
  }, [searchQuery]);

  useEffect(() => {
    setSearchResults(getSortedResults(searchResults));
  }, [sortType]);

  return (
    <div>
      <FilterOptions
        setSearchQuery={setSearchQuery}
        setSortType={setSortType}
      />
      {searchQuery.length <= 0 ? (
        <h1 className="searchScreen-title">Try Searching for A Movie!</h1>

      ) : (
        <>
          {searchResults.length <= 0 ? (
            <h1 className="searchScreen-title">No Results for your Search</h1>
          ) : (
            <MoviesList openModal={openModal} moviesList={searchResults} loadMore={loadMore} />
          )}
        </>

      )}
    </div>
  );
};

export default SearchScreen;
