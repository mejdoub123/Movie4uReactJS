import React, { useReducer } from "react";
import dataimdbContext from "./dataimdbContext";
import axios from "axios";
import dataimdbReducer from "./dataimdbReducer";
import {
  SEARCH_MOVIE,
  SEARCH_MOVIES,
  SEARCH_SERIES,
  SEARCH_SERIE,
  CLEAR_MOVIES,
  CLEAR_SERIES,
  CLEAR_SERIE,
  CLEAR_MOVIE,
  SET_TYPE_SHOW,
  SET_LOADING,
} from "../types";

const DataimdbState = (props) => {
  const initialState = {
    movies: [],
    series: [],
    movie: {},
    serie: {},
    type: "movies",
    loading: false,
  };
  const [state, dispatch] = useReducer(dataimdbReducer, initialState);

  //----------------------Search Movies---------------------------------
  const searchMovies = async (moviename) => {
    setLoading();
    const resultatsGetbyName = await searchMovieIdByName(moviename);

    let res = [];
    if (!resultatsGetbyName) {
      console.log("Please enter a valid show name...");
    } else {
      for (
        let i = 0;
        resultatsGetbyName.length > 20 ? i < 20 : i < resultatsGetbyName.length;
        i++
      ) {
        res.push(await searchMovieInfoById(resultatsGetbyName[i].imdb_id));
      }
    }
    dispatch({ type: SEARCH_MOVIES, payload: res });
  };
  //----------------------Search Movie---------------------------------
  const searchMovie = async (id) => {
    const res = await searchMovieInfoById(id);

    dispatch({ type: SEARCH_MOVIE, payload: res });
  };

  const searchMovieInfoById = async (id) => {
    let res = {};
    var options = {
      method: "GET",
      url: `https://data-imdb1.p.rapidapi.com/movie/id/${id}/`,
      headers: {
        "x-rapidapi-host": "data-imdb1.p.rapidapi.com",
        "x-rapidapi-key": "586db6afc6msh007cc4eedf7796ap163debjsnd1a17be1e269",
      },
    };

    res = await axios.request(options);

    return res.data.results;
  };
  const searchMovieIdByName = async (moviename) => {
    let res = [];
    const options = {
      method: "GET",
      url: `https://data-imdb1.p.rapidapi.com/movie/imdb_id/byTitle/${moviename}/`,
      headers: {
        "x-rapidapi-host": "data-imdb1.p.rapidapi.com",
        "x-rapidapi-key": "586db6afc6msh007cc4eedf7796ap163debjsnd1a17be1e269",
      },
    };

    res = await axios.request(options);

    return res.data.results;
  };

  //---------------------Search Series-------------------------------------

  const searchSeries = async (seriename) => {
    setLoading();
    const resultatsGetbyName = await searchSerieIdByName(seriename);

    let res = [];
    if (!resultatsGetbyName) {
      console.log("Please enter a valid show name...");
    } else {
      for (
        let i = 0;
        resultatsGetbyName.length > 20 ? i < 20 : i < resultatsGetbyName.length;
        i++
      ) {
        res.push(await searchSerieInfoById(resultatsGetbyName[i].imdb_id));
      }
    }
    dispatch({ type: SEARCH_SERIES, payload: res });
  };

  //---------------------Search Serie-------------------------------------

  const searchSerie = async (id) => {
    const res = await searchSerieInfoById(id);

    dispatch({ type: SEARCH_SERIE, payload: res });
  };

  const searchSerieInfoById = async (id) => {
    let res = {};
    var options = {
      method: "GET",
      url: `https://data-imdb1.p.rapidapi.com/series/id/${id}/`,
      headers: {
        "x-rapidapi-host": "data-imdb1.p.rapidapi.com",
        "x-rapidapi-key": "586db6afc6msh007cc4eedf7796ap163debjsnd1a17be1e269",
      },
    };

    res = await axios.request(options);

    return res.data.results;
  };
  const searchSerieIdByName = async (seriename) => {
    let res = [];
    const options = {
      method: "GET",
      url: `https://data-imdb1.p.rapidapi.com/series/idbyTitle/${seriename}/`,
      headers: {
        "x-rapidapi-host": "data-imdb1.p.rapidapi.com",
        "x-rapidapi-key": "586db6afc6msh007cc4eedf7796ap163debjsnd1a17be1e269",
      },
    };

    res = await axios.request(options);

    return res.data.results;
  };

  const setTypeShow = (type) => {
    dispatch({ type: SET_TYPE_SHOW, payload: type });
  };

  const clearMovies = () => dispatch({ type: CLEAR_MOVIES });

  const clearMovie = () => dispatch({ type: CLEAR_MOVIE });

  const clearSerie = () => dispatch({ type: CLEAR_SERIE });

  const clearSeries = () => dispatch({ type: CLEAR_SERIES });

  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <dataimdbContext.Provider
      value={{
        movies: state.movies,
        loading: state.loading,
        series: state.series,
        movie: state.movie,
        serie: state.serie,
        type: state.type,
        searchSeries,
        searchMovies,
        searchMovie,
        searchSerie,
        clearMovies,
        clearSeries,
        clearMovie,
        clearSerie,
        setTypeShow,
        setLoading,
      }}
    >
      {props.children}
    </dataimdbContext.Provider>
  );
};

export default DataimdbState;
