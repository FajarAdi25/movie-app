import React from "react";
import { useNavigate } from "react-router-dom";

const Movie = ({ movie, props }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`detail/${movie.imdbID}`);
  };
  return (
    <>
      <div className="container">
        <div className="col" {...props}>
          <div className="card mb-4" onClick={handleClick}>
            <img
              className="card-img-top"
              style={{ width: "100%", height: 350, objectFit: "cover" }}
              src={movie.Poster}
              alt={movie.Title}
            />
            <div
              className="card-body text-white text-center"
              style={{ backgroundColor: "#FF4000" }}
            >
              <h7 className="card-text">{movie.Title}</h7>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Movie;
