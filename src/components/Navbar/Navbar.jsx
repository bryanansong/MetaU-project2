import "./Navbar.css";

const Navbar = ({ isSearching, setIsSearching }) => {
  return (
    <div className="navbar">
      <h1>Flixster</h1>
      {isSearching ? (
        <div className="toggle-button" onClick={() => setIsSearching(false)}>
          See Now Playing
        </div>
      ) : (
        <div className="toggle-button" onClick={() => setIsSearching(true)}>
          Search For Movies
        </div>
      )}
    </div>
  );
};

export default Navbar;
