/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Movie from "./Movie";

export default function MovieList({ movies }) {
  return (
    <ul className="list">
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}
