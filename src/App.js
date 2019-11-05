import React, { Suspense } from 'react';

import logo from './logo.svg';
import './App.css';

import { getMoviesData } from './api/api';

const moviesResource = getMoviesData();

const Movies = () => {
  const movies = moviesResource.movies.read();

  // Uncomment to break Suspense resource tracking
  // const timeOut = moviesResource.timeOut.read(true);

  return (
    <ul>
      {movies.map((movie, index) => (
        <li key={index}>Some movie</li>
      ))}
    </ul>
  );
};

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Suspense resource={moviesResource} fallback={<h1>Loading...</h1>}>
          <Movies />
        </Suspense>
      </header>
    </div>
  );
};

export default App;
