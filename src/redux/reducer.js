const initialState = {
  movies: [],
  loading: false,
  error: null,
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DATA_REQUEST":
      return { ...state, loading: true };
    case "DATA_SUCCESS":
      return { ...state, movies: action.payload, loading: false };
    case "DATA_FAILED":
      return { ...state, error: action.payload };
    case "DATA_ID_REQUEST":
      return { ...state, loading: true };
    case "DATA_ID_SUCCESS":
      return { ...state, movies: action.payload, loading: false };
    case "DATA_ID_FAILED":
      return { ...state, error: action.payload };
    case "SEARCH_MOVIES":
      return { ...state, loading: false, movies: action.payload };
    default:
      return state;
  }
};

export default moviesReducer;
