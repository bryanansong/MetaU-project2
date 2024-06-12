import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import SearchScreen from "./screens/SearchScreen/SearchScreen";
import NowPlayingScreen from "./screens/NowPlayingScreen/NowPlayingScreen";
import Modal from "./components/Modal/Modal";

const App = () => {
  const [isSearching, setIsSearching] = useState(true);
  const [isModalVisible, setIsModaVisible] = useState(true);
  const [modalData, setModalData] = useState({});

  const openModal = (movieInformation) => {
    setIsModaVisible(true);
    setModalData(movieInformation);
  };

  const closeModal = () => {
    setIsModaVisible(false);
    setModalData({});
  }

  return (
    <div className="App">
      {isModalVisible && <Modal closeModal={closeModal} isVisible={isModalVisible} modalData={modalData} />}
      <Navbar isSearching={isSearching} setIsSearching={setIsSearching} />
      <div className="content">
        {isSearching ? <SearchScreen openModal={openModal} /> : <NowPlayingScreen openModal={openModal} />}
      </div>
      <Footer />
    </div>
  );
};

export default App;
