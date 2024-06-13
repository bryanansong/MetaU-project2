import "./Navbar.css";

const Navbar = ({ isSearching, setIsSearching, setSidebarOpened }) => {
  return (
    <div className="navbar">
      <div
        className="burger-icon-container"
        onClick={() => setSidebarOpened(true)}
      >
        <svg
          viewBox="-1.2 -1.2 14.40 14.40"
          enableBackground="new 0 0 12 12"
          version="1.1"
          fill="#ffffff"
          stroke="#ffffff"
          strokeWidth="0.192"
          className="burger-icon"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <g>
              {" "}
              <rect
                fill="#ffffff"
                height="1"
                width="11"
                x="0.5"
                y="5.5"
              ></rect>{" "}
              <rect fill="#ffffff" height="1" width="11" x="0.5" y="2.5"></rect>{" "}
              <rect fill="#ffffff" height="1" width="11" x="0.5" y="8.5"></rect>{" "}
            </g>{" "}
          </g>
        </svg>
      </div>
      <h1 className="navbar-title">Flixster</h1>
      <div className="button-section">
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
    </div>
  );
};

export default Navbar;
