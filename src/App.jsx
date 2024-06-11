import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import SearchScreen from "./screens/SearchScreen/SearchScreen";
import NowPlayingScreen from "./screens/NowPlayingScreen/NowPlayingScreen";

const App = () => {
  const [isSearching, setIsSearching] = useState(true);

  return (
    <div className="App">
      <Navbar isSearching={isSearching} setIsSearching={setIsSearching} />
      <div className="content">
        {isSearching ? <SearchScreen /> : <NowPlayingScreen />}
      </div>
      <Footer />
    </div>
  );
};

export default App;
