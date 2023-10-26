/* eslint-disable no-unused-vars */
import { useState } from "react";
import Navbar from "./Navbar";
import MainComp from "./MainComp";
import tempMovieData from "./TempMovieData.jsx";
import Search from "./Search";
import Logo from "./Logo";
import NumResults from "./Numresults";
import ListBox from "./ListBox.jsx";
import WatchedBox from "./WatchedBox.jsx";
import MovieList from "./MovieList";

import "./style.css";

function App() {
  const [movies, setMovies] = useState(tempMovieData);

  return (
    <>
      <Navbar>
        <Logo />
        <Search />
        <NumResults movies={movies} />
      </Navbar>
      <MainComp>
        <ListBox>
          <MovieList movies={movies} />
        </ListBox>
        <WatchedBox />
      </MainComp>
    </>
  );
}

export default App;
