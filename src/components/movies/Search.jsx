import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faClose } from "@fortawesome/free-solid-svg-icons";
import dataimdbContext from "../../context/dataImdb/dataimdbContext";

const Search = () => {
  const dataImdbContext = useContext(dataimdbContext);
  const { type, movies, series } = dataImdbContext;
  const [text, setText] = useState("");
  const onChangeShowType = (e) => {
    dataImdbContext.setTypeShow(e.target.value);
  };
  const onChangeText = (e) => {
    setText(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      console.log(`Please enter a ${type}`);
    } else {
      if (type === "movies") {
        dataImdbContext.searchMovies(text);
      } else {
        dataImdbContext.searchSeries(text);
      }

      console.log(text);
      setText("");
    }
  };
  return (
    <div className="container-s">
      <div className="search">
        <h1>Find your Show</h1>
        <div className="choose-type">
          <input
            type="radio"
            checked={type === "movies" ? true : false}
            name="show-type"
            value="movies"
            id="movies"
            onChange={onChangeShowType}
          />
          <label htmlFor="movies">Movie</label>
          <input
            type="radio"
            checked={type === "series" ? true : false}
            name="show-type"
            value="series"
            id="series"
            onChange={onChangeShowType}
          />
          <label htmlFor="series">Serie</label>
        </div>

        <div className="search-container">
          <input
            type="text"
            name="name"
            placeholder={`Seach a show...`}
            value={text}
            onChange={onChangeText}
          />
          <button className="search-btn" onClick={onSubmit}>
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
          </button>
          {movies.length > 0 && type === "movies" ? (
            <button
              className="search-btn"
              onClick={dataImdbContext.clearMovies}
            >
              <FontAwesomeIcon
                icon={faClose}
                className="close-icon"
              ></FontAwesomeIcon>
            </button>
          ) : (
            series.length > 0 &&
            type === "series" && (
              <button
                className="search-btn"
                onClick={dataImdbContext.clearSeries}
              >
                <FontAwesomeIcon
                  icon={faClose}
                  className="close-icon"
                ></FontAwesomeIcon>
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
