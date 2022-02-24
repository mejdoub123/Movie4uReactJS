import React, { useContext } from "react";
import MovieItem from "./MovieItem";
import dataimdbContext from "../../context/dataImdb/dataimdbContext";
import Spinner from "../layouts/Spinner";

const Movies = () => {
  const dataImdbContext = useContext(dataimdbContext);
  const { loading, movies, series, type } = dataImdbContext;
  console.log(type);
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="wrapper">
        {type === "movies"
          ? movies.map((movie) => (
              <MovieItem key={movie.imdb_id} show={movie} type={type} />
            ))
          : series.map((serie) => (
              <MovieItem key={serie.imdb_id} show={serie} type={type} />
            ))}
      </div>
    );
  }
};

export default Movies;
