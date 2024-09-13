import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../component/Header";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoviesById } from "../redux/action";
import Loading from "../component/Loading";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { movies, loading } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMoviesById(id));
  }, [dispatch, id]);

  return (
    <>
      <div className="detail">
        <Header />
        <main className="container mt-4">
          {loading ? (
            <Loading />
          ) : (
            <div className="d-flex justify-content-center">
              <div className="d-flex flex-column">
                <h3 className="text-bold text-center">{movies.Title}</h3>
                <div className="d-flex justify-content-center">
                  <img className="mb-3" src={movies.Poster} alt="poster" />
                </div>

                <h5 className="text-center">{movies.Released}</h5>
                <h6 className="text-center">{movies.Genre}</h6>
                <p>{movies.Plot}</p>
                {movies.Ratings && movies.Ratings.length > 0 ? (
                  <div className="card-body p-2 text-center">
                    {movies.Ratings[0].Value}
                  </div>
                ) : (
                  "N/A"
                )}
                {/* <p>{`IMDB: ${movies.Ratings[1].Value}`}</p> */}
                {/* <p>{`Rotten: ${movies.Ratings[1].Value}`}</p> */}
                {/* <p>{`Metacritic: ${movies.Ratings[2].Value}`}</p> */}
              </div>
            </div>
          )}
        </main>
      </div>
    </>
  );
};

export default Detail;
