import "./FilterOptions.css";

const FilterOptions = ({ setSearchQuery, setSortType }) => {
  return (
    <div className="filterOptions">
      {setSearchQuery ? (
        <input
          type="text"
          placeholder="Search"
          onChange={(event) => setSearchQuery(event.target.value)}
        />
      ) : (
        <></>
      )}
      <select onChange={(e) => setSortType(e.target.value)}>
        <option value="none">Select Sorting</option>
        <option value="title_asc">Title | Ascending</option>
        <option value="title_desc">Title | Reverse</option>
        <option value="popularity">Popularity</option>
        <option value="date">Release Date</option>
        <option value="vote_average">Average</option>
      </select>
    </div>
  );
};

export default FilterOptions;
