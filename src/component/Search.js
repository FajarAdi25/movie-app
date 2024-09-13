import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchMovies } from "../redux/action";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      dispatch(searchMovies(searchTerm));
    }
  };
  return (
    <>
      <form className="d-flex ms-auto" onSubmit={handleSubmit}>
        <div class="input-group input-group-sm">
          <input
            type="search"
            className="form-control"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="btn btn-dark" type="submit">
            SEARCH
          </button>
        </div>
      </form>
    </>
  );
};

export default Search;
