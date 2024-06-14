import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import SearchScreen from "./screens/SearchScreen/SearchScreen";
import NowPlayingScreen from "./screens/NowPlayingScreen/NowPlayingScreen";
import Modal from "./components/Modal/Modal";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [isModalVisible, setIsModaVisible] = useState(false);
  const [modalData, setModalData] = useState({});
  const [likedMovies, setLikedMovies] = useState([]);
  const [watchedMovies, setWatchedMovies] = useState([]);
  const [sidebarOpened, setSidebarOpened] = useState(true);

  const openModal = (movieInformation) => {
    setIsModaVisible(true);
    setModalData(movieInformation);
  };

  const closeModal = () => {
    setIsModaVisible(false);
    setModalData({});
  };

  const addMovieAttributes = (moviesList) => {
    return moviesList.map((movie) => {
      const isLiked = likedMovies.includes(movie.id);
      const isWatched = watchedMovies.includes(movie.id);

      return {
        ...movie,
        liked: isLiked ? true : false,
        watched: isWatched ? true : false,
      };
    });
  };

  return (
    <div className="App">
      <Sidebar
        likedMovies={likedMovies}
        watchedMovies={watchedMovies}
        sidebarOpened={sidebarOpened}
        setSidebarOpened={setSidebarOpened}
        setModalData={setModalData}
        openModal={openModal}
      />
      {isModalVisible && (
        <Modal
          closeModal={closeModal}
          movie={modalData}
          updateModalMovie={setModalData}
          likedMovies={likedMovies}
          setLikedMovies={setLikedMovies}
          watchedMovies={watchedMovies}
          setWatchedMovies={setWatchedMovies}
        />
      )}
      <Navbar
        isSearching={isSearching}
        setIsSearching={setIsSearching}
        setSidebarOpened={setSidebarOpened}
      />
      <div className="content">
        {isSearching ? (
          <SearchScreen
            openModal={openModal}
            addMovieAttributes={addMovieAttributes}
          />
        ) : (
          <NowPlayingScreen
            openModal={openModal}
            addMovieAttributes={addMovieAttributes}
          />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default App;
