import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/layouts/NavBar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import Movie from "./components/movies/Movie";
import DataimdbState from "./context/dataImdb/DataimdbState";

function App() {
  return (
    <DataimdbState>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route
              exact
              path={`/show/:show_type/:movie_id`}
              element={<Movie />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </DataimdbState>
  );
}

export default App;
