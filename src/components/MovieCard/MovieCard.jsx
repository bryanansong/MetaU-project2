/* eslint-disable react/prop-types */
import "./MovieCard.css";

const MovieCard = ({ movie, openModal }) => {
  return (
    <div className="card" onClick={() => openModal(movie)}>
      <img
        src={
          movie?.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : "https://placehold.co/260x390?text=No+Cover+Art&font=montserrat"
        }
        className="movieCover"
        alt="Movie Cover Art"
      />
      <div className="movieText">
        <h2 className="movieTitle">
          {movie.title ? movie.title : "No Title Found"}
        </h2>
        <div className="rating-container">
          <p>
            Rating:{" "}
            {movie.vote_average ? movie.vote_average : "No Rating Found"}
          </p>
          <div className="rating-star">
            <svg
              alt="A gold star icon"
              width="22"
              height="22"
              viewBox="0 0 22 22"
            >
              <path
                d="M10.2389 1.87385C10.4835 1.37847 10.6057 1.13078 10.7717 1.05164C10.9161 0.982787 11.0839 0.982787 11.2283 1.05164C11.3943 1.13078 11.5165 1.37847 11.7611 1.87385L14.081 6.57369C14.1531 6.71994 14.1892 6.79306 14.242 6.84984C14.2887 6.9001 14.3447 6.94083 14.4069 6.96977C14.4772 7.00245 14.5579 7.01424 14.7193 7.03783L19.9085 7.79631C20.455 7.87618 20.7282 7.91612 20.8546 8.04959C20.9646 8.16571 21.0164 8.32528 20.9954 8.48386C20.9714 8.66613 20.7736 8.85879 20.3779 9.24412L16.6244 12.9001C16.5074 13.0141 16.4489 13.071 16.4111 13.1388C16.3777 13.1989 16.3563 13.2648 16.348 13.333C16.3386 13.4101 16.3524 13.4906 16.3801 13.6516L17.2657 18.8154C17.3591 19.3601 17.4058 19.6324 17.3181 19.794C17.2417 19.9346 17.1059 20.0332 16.9486 20.0624C16.7678 20.0959 16.5232 19.9673 16.0342 19.7101L11.395 17.2704C11.2505 17.1944 11.1782 17.1564 11.1021 17.1415C11.0347 17.1283 10.9653 17.1283 10.8979 17.1415C10.8218 17.1564 10.7495 17.1944 10.605 17.2704L5.96584 19.7101C5.47675 19.9673 5.23221 20.0959 5.05138 20.0624C4.89406 20.0332 4.75831 19.9346 4.68194 19.794C4.59416 19.6324 4.64087 19.3601 4.73428 18.8154L5.61995 13.6516C5.64756 13.4906 5.66136 13.4101 5.65202 13.333C5.64375 13.2648 5.62231 13.1989 5.58888 13.1388C5.55113 13.071 5.49263 13.0141 5.37562 12.9001L1.62206 9.24412C1.22645 8.85879 1.02864 8.66613 1.00457 8.48386C0.983627 8.32528 1.03537 8.16571 1.14538 8.04959C1.27182 7.91612 1.54505 7.87618 2.0915 7.79631L7.28073 7.03783C7.44211 7.01424 7.5228 7.00245 7.59307 6.96977C7.65529 6.94083 7.71131 6.9001 7.75801 6.84984C7.81076 6.79306 7.84686 6.71994 7.91905 6.57369L10.2389 1.87385Z"
                fill="#F6D629"
                stroke="#F6D629"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
