import "./MovieCard.css";

const MovieCard = () => {
  return (
    <div className="card">
      <img
        src="https://images.unsplash.com/photo-1635805737707-575885ab0820?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="movieCover"
        alt=""
      />
      <h2 className="movieTitle">Movie Name</h2>
      <p>Rating: 5 </p>
    </div>
  );
};

export default MovieCard;
