import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import MovieCard from './MovieCard.js';
import searchIcon from './search.svg'
import AddFavourites from './AddFavourites.js';
import RemoveFavourites from './RemoveFavourites.js';
const App = () => {
  const [searchTerm, setSearchTerm] = useState([])
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const searchMovies = async (title) => {
    const API_URL = `http://www.omdbapi.com/?s=${title}&apikey=6de1a598`;
    const response = await fetch(API_URL);
    const data = await response.json();

    if (data.Search) {
      setMovies(data.Search)
    }
  }
  useEffect(() => {
    searchMovies(searchTerm);
  }, [searchTerm]);

  useEffect(() =>{
    const movieFavourites =JSON.parse(
      localStorage.getItem('movie-keys')
    );
    setFavourites(movieFavourites);
  } ,[]);
  const saveToLocalStorage = (items) => {
    localStorage.setItem('movie-keys', JSON.stringify(items))
  };
  const addFouriteMovie = (movies) => {
    const newfavouriteList = [...favourites, movies];
    setFavourites(newfavouriteList);
    saveToLocalStorage(newfavouriteList);
  };
  const removeFouriteMovie = (movies) => {
    const newfavouriteList = favourites.filter((favourite) => favourite.imdbID !== movies.imdbID);

    setFavourites(newfavouriteList);
    saveToLocalStorage(newfavouriteList);
  };
  return (
    <div className="app">
      <h1> Movies Collections </h1>
      <div className="search">
        <input placeholder='Search for movies'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} />
        <img src={searchIcon} alt="search"
          onClick={() => searchMovies(searchTerm)} />

      </div>
      <div>  <h1> Movies  </h1></div>
      <div className="container">

        <MovieCard movies={movies} handleFavouriteClick={addFouriteMovie}
          addFavourites={AddFavourites}
        />
      </div>
      <div>  <h1> Favourite Movies  </h1></div>
      <div className="container">
        <MovieCard movies={favourites} handleFavouriteClick={removeFouriteMovie}
          addFavourites={RemoveFavourites}
        />
      </div>
    </div>
  );
}

export default App;
