import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import SearchScreen from "./screens/SearchScreen/SearchScreen";
import NowPlayingScreen from "./screens/NowPlayingScreen/NowPlayingScreen";
import Modal from "./components/Modal/Modal";

const App = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [isModalVisible, setIsModaVisible] = useState(false);
  const [modalData, setModalData] = useState({});

  const openModal = (movieInformation) => {
    setIsModaVisible(true);
    setModalData(movieInformation);
  };

  const closeModal = () => {
    setIsModaVisible(false);
    setModalData({});
  }

  const addMovieAttributes = (moviesList) => {
    return moviesList.map((item) => ({
      ...item,
      watched: false,
      liked: false,
    }));
  };

  return (
    <div className="App">
      {isModalVisible && <Modal closeModal={closeModal} isVisible={isModalVisible} movie={modalData} />}
      <Navbar isSearching={isSearching} setIsSearching={setIsSearching} />
      <div className="content">
        {isSearching ? <SearchScreen openModal={openModal} addMovieAttributes={addMovieAttributes}/> : <NowPlayingScreen openModal={openModal} addMovieAttributes={addMovieAttributes} />}
      </div>
      <Footer />
    </div>
  );
};

export default App;
