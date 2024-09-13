import React, { useEffect } from "react";
import Header from "../component/Header";
import Movie from "../component/Movie";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../redux/action";
import Loading from "../component/Loading";
const Home = () => {
  const dispatch = useDispatch();
  const { movies, loading } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const renderContent = () => {
    if (loading) {
      return Array(10)
        .fill()
        .map((_, index) => <Loading key={index} />);
    }
    if (movies && movies.length > 0) {
      return movies.map((movie) => <Movie movie={movie} key={movie.imdbID} />);
    }

    return (
      <div className="col-12 text-center">
        No movies found. Try another search term.
      </div>
    );
  };
  return (
    <div className="app">
      <Header />
      <main className="container mt-4">
        <h2 className="mb-4">Show your favorite movies</h2>
        <div className="row row-cols-5">{renderContent()}</div>
      </main>
    </div>
  );
};

export default Home;
