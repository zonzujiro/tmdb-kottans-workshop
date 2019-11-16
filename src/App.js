import React, { Suspense, SuspenseList } from "react";

import logo from "./logo.svg";
import "./App.css";

import { getMoviesData } from "./api/api";
import Image from "./Image";

const moviesResource = getMoviesData();

const Movies = () => {
  const movies = moviesResource.movies.read();

  return (
    <ul style={{ display: "flex", flexWrap: "wrap" }}>
      <SuspenseList reveal>
        {movies.map((movie, index) => (
          <Suspense fallback={<p>Load image...</p>} key={index}>
            <section>
              <Image src={movie.poster_path} />
            </section>
          </Suspense>
        ))}
      </SuspenseList>
    </ul>
  );
};

const App = () => {
  return (
    <div className="App">
      <Suspense fallback={<img src={logo} className="App-logo" alt="logo" />}>
        <Movies />
      </Suspense>
    </div>
  );
};

export default App;
