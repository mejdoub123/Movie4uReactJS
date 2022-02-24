import React from "react";
import Search from "../movies/Search";
import Movies from "../movies/Movies";
import { Fragment } from "react";

const Home = () => {
  return (
    <Fragment>
      <Search />
      <Movies />
    </Fragment>
  );
};

export default Home;
