import { useEffect, useState } from "react";
import "./SearchScreen.css";
import FilterOptions from "../../components/FilterOptions/FilterOptions";
import MoviesList from "../../components/MoviesList/MoviesList";

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [lastPageNumber, setLastPageNumber] = useState(0);
  const [searchResults, setSearchResults] = useState([]);

  // TODO: Implement the sorting functionality
  const [sortType, setSortType] = useState("none");

  const getFilteredResults = (list) => {
    const types = {
      none: "none",
      popularity: "popularity",
      date: "release_date",
      vote_average: "vote_average",
      title_asc: "title",
      title_desc: "reverse",
    };

    const sortProperty = types[sortType];

    if (!list) {
      return [];
    } else if (sortProperty === "none") {
      return list;
    }
    return [...list].sort((a, b) => {
      if (sortProperty === "reverse") {
        return b.title.localeCompare(a.title);
      } else if (sortProperty === "title") {
        return a.title.localeCompare(b.title);
      } else {
        return b[sortProperty] - a[sortProperty];
      }
    });
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
      .then((response) =>
        setSearchResults(
          more ? [...searchResults, ...response.results] : [...response.results]
        )
      )
      .catch((err) => console.error(err));
  };

  const loadMore = () => {
    getSearchResults(true);
    setLastPageNumber(lastPageNumber + 1);
  };

  useEffect(() => {
    setLastPageNumber(0);
    getSearchResults();
  }, [searchQuery, sortType]);

  return (
    <div>
      <FilterOptions
        setSearchQuery={setSearchQuery}
        setSortType={setSortType}
      />
      {searchResults.length <= 0 ? (
        <h1 className="no-results">No Results for your Search</h1>
      ) : (
        <MoviesList moviesList={searchResults} loadMore={loadMore} />
      )}
    </div>
  );
};

export default SearchScreen;
