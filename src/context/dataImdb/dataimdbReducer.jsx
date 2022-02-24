import {
  SEARCH_MOVIES,
  SEARCH_SERIES,
  CLEAR_MOVIES,
  CLEAR_SERIES,
  CLEAR_SERIE,
  CLEAR_MOVIE,
  SET_LOADING,
  SEARCH_MOVIE,
  SEARCH_SERIE,
  SET_TYPE_SHOW,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case SEARCH_MOVIES:
      return {
        ...state,
        movies: action.payload,
        loading: false,
      };
    case SEARCH_SERIES:
      return {
        ...state,
        series: action.payload,
        loading: false,
      };
    case CLEAR_MOVIES:
      return {
        ...state,
        movies: [],
        loading: false,
      };
    case CLEAR_SERIES:
      return {
        ...state,
        series: [],
        loading: false,
      };
    case SEARCH_MOVIE:
      return {
        ...state,
        movie: action.payload,
        loading: false,
      };
    case SEARCH_SERIE:
      return {
        ...state,
        serie: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case CLEAR_SERIE:
      return {
        ...state,
        serie: {},
        loading: false,
      };
    case CLEAR_MOVIE:
      return {
        ...state,
        movie: {},
        loading: false,
      };
    case SET_TYPE_SHOW:
      return {
        ...state,
        type: action.payload,
      };

    default:
      return state;
  }
};
