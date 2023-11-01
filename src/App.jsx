/* eslint-disable no-unused-vars */
import { useState } from "react";
import Navbar from "./Navbar";
import MainComp from "./MainComp";
import tempMovieData from "./TempMovieData.jsx";
import Search from "./Search";
import Logo from "./Logo";
import NumResults from "./Numresults";
import WatchedSummary from "./WatchedSummary.jsx";
import WatchedMoviesList from "./WatchedMoviesList.jsx";
import MovieList from "./MovieList";
import tempWatchedData from "./TempWachedData.jsx";
import Box from "./Box";

import "./style.css";

function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);
  return (
    <>
      <Navbar>
        <Logo />
        <Search />
        <NumResults movies={movies} />
      </Navbar>
      <MainComp>
        <Box>
          <MovieList movies={movies} />
        </Box>
        <Box>
          <WatchedSummary watched={watched} />
          <WatchedMoviesList watched={watched} />
        </Box>
      </MainComp>
    </>
  );
}

export default App;
