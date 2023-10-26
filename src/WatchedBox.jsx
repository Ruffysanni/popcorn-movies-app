/* eslint-disable no-unused-vars */
import { useState } from "react";

import WatchedSummary from "./WatchedSummary.jsx";
import tempWatchedData from "./TempWachedData.jsx";
import WatchedMoviesList from "./WatchedMoviesList.jsx";

export default function WatchedBox() {
  const [watched, setWatched] = useState(tempWatchedData);
  const [isOpen2, setIsOpen2] = useState(true);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen2((open) => !open)}
      >
        {isOpen2 ? "–" : "+"}
      </button>
      {isOpen2 && (
        <>
          <WatchedSummary watched={watched} />

          <WatchedMoviesList watched={watched} />
        </>
      )}
    </div>
  );
}
