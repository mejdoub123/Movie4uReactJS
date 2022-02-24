import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import dataimdbContext from "../../context/dataImdb/dataimdbContext";
import { useParams } from "react-router-dom";
import Spinner from "../layouts/Spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faClock } from "@fortawesome/free-solid-svg-icons";

const Movie = () => {
  const { movie_id } = useParams();
  const dataImdbContext = useContext(dataimdbContext);
  const {
    loading,
    movie,
    type,
    serie,
    searchMovie,
    searchSerie,
    clearMovie,
    clearSerie,
  } = dataImdbContext;
  useEffect(() => {
    if (type === "movies") {
      searchMovie(movie_id);
    } else {
      searchSerie(movie_id);
    }
    //eslint-disable-next-line
  }, []);

  console.log(movie);
  console.log(serie);
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="sh-card">
        <div className="showinfo-page">
          <div className="btn-back-home">
            <button
              onClick={
                type === "movies" ? clearMovie : type === "series" && clearSerie
              }
            >
              <Link to="/">Back to Search</Link>
            </button>
          </div>
          <div className="show-container">
            <div className="show-poster">
              <img
                src={type === "movies" ? movie.banner : serie.banner}
                alt=""
                className="img-showinfo"
                style={{ width: "150px" }}
              />
            </div>
            <div className="showinfo-container">
              <h1>{type === "movies" ? movie.title : serie.title}</h1>
              <div className="d-rating-duration-info">
                <h3>
                  <FontAwesomeIcon icon={faStar} className="rating-icon" />
                  {type === "movies" ? movie.rating : serie.rating}
                </h3>

                <h3>
                  <FontAwesomeIcon icon={faClock} className="duration-icon" />
                  {type === "movies"
                    ? movie.movie_length
                    : serie.movie_length}{" "}
                  min
                </h3>
              </div>

              <h3>Description</h3>
              <p>
                {type === "movies" ? movie.description : serie.description}{" "}
              </p>
              <button className="btn-watch">Watch now</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Movie;
