import axios from "axios";

// const API_URL = "https://www.omdbapi.com/?s=man&apikey=6bfc0a89"; // Replace with your actual API key
const API_URL = "http://www.omdbapi.com/";
const API_KEY = "6bfc0a89";

const fetchMovies = () => async (dispatch) => {
  try {
    dispatch({ type: "DATA_REQUEST" });
    const response = await axios.get(`${API_URL}?s=man&apikey=${API_KEY}`);
    // console.log(response.json);
    // const data = await response.json();
    const data = response.data.Search;
    dispatch({ type: "DATA_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "DATA_FAILED", payload: error });
    console.error("Error fetching movies:", error);
  }
};
const fetchMoviesById = (id) => async (dispatch) => {
  try {
    dispatch({ type: "DATA_ID_REQUEST" });
    const response = await axios.get(`${API_URL}?i=${id}&apikey=${API_KEY}`);
    const data = response.data;
    dispatch({ type: "DATA_ID_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "DATA_ID_FAILED", payload: error });
    console.error("Error fetching movies:", error);
  }
};

const searchMovies = (searchTerm) => async (dispatch) => {
  try {
    dispatch({ type: "DATA_REQUEST" });
    const response = await axios.get(
      `${API_URL}?apikey=${API_KEY}&t=${searchTerm}`
    );
    console.log(response);
    const data = response.data.Search;

    dispatch({ type: "SEARCH_MOVIES", payload: data });
  } catch (error) {
    dispatch({ type: "DATA_FAILED", payload: error.message });
  }
};

export { fetchMovies, fetchMoviesById, searchMovies };
