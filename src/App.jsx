import { useEffect, useState } from "react";
import "./App.css";
import FilterOptions from "./components/FilterOptions/FilterOptions";
import Footer from "./components/Footer/Footer";
import MoviesList from "./components/MoviesList/MoviesList";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  const [moviesList, setMoviesList] = useState([]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYjdiNDBjODkyMGJjNzMyODk1MTU0M2IyM2MwMjg3YSIsInN1YiI6IjY2Njc2NDY0YTdmNzVmZDVhODFjMzAyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C6GUy0On998UxcO7SY7sKs6S06ECbxQJ_Vsav1vGusw",
    },
  };

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((response) => setMoviesList(response.results))
      .catch((err) => console.error(err));
  });

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <FilterOptions />
        <MoviesList movies={moviesList} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
