import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faStar } from "@fortawesome/free-solid-svg-icons";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

const MovieItem = ({
  show: { imdb_id, title, rating, movie_length, image_url },
  type,
}) => {
  return (
    <div className="card-movie">
      <img src={image_url} alt="" />
      <div className="descriptions">
        <h3>{title}</h3>
        <div>
          <Link to={`/show/${type}/${imdb_id}`} className="btn-card">
            More
          </Link>
        </div>
        <div className="d-rating-duration">
          <h4>
            <FontAwesomeIcon icon={faStar} className="rating-icon" />
            {rating}
          </h4>
          <h4>
            <FontAwesomeIcon icon={faClock} className="duration-icon" />
            {movie_length} min
          </h4>
        </div>
      </div>
    </div>
  );
};

MovieItem.propTypes = {
  show: propTypes.object.isRequired,
};

export default MovieItem;
