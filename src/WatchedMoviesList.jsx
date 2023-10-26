/* eslint-disable react/prop-types */
import WatchedMovie from "./WatchedMovie.jsx";
export default function WatcedMoviesList({ watched }) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}
