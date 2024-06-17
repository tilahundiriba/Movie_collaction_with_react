import React from 'react';
import { useEffect , useState} from 'react';
import './App.css';
import batman from './batman.jpeg';
import ironman from  './ironman.jpeg';
import spiderman from './spiderman.jpg';
import superman from './superman.jpg';
import MovieCard from './MovieCard.js';
import searchIcon from './search.svg'
import theflash from './the-flash.jpg';
import wonderwomen from './wonder_woman.jpg'
import thor from './thor.jpeg'
const API_URL = 'http://www.omdbapi.com?apikey=6de1a598';
const movie1 ={
  "Title":"Amazing Spiderman Syndrome",
  "Year":"2012",
  "imdbID":"tt2586634",
  "Type":"movie",
  "Poster": spiderman
}
const movie5 ={
  "Title":"Amazing Ironman Syndrome",
  "Year":"2012",
  "imdbID":"tt2586634",
  "Type":"movie",
  "Poster": ironman
}
const movie4 ={
  "Title":"Amazing Batman Syndrome",
  "Year":"2012",
  "imdbID":"tt2586634",
  "Type":"movie",
  "Poster": batman
}
const movie2 ={
  "Title":"Amazing Superman Syndrome",
  "Year":"2012",
  "imdbID":"tt2586634",
  "Type":"movie",
  "Poster": superman
}
const movie3 ={
  "Title":"Amazing Thor Syndrome",
  "Year":"2012",
  "imdbID":"tt2586634",
  "Type":"movie",
  "Poster": thor
}
const movie6 ={
  "Title":"Amazing wonder-women Syndrome",
  "Year":"2012",
  "imdbID":"tt2586634",
  "Type":"movie",
  "Poster": wonderwomen
}
const movie7 ={
  "Title":"Amazing The flash Syndrome",
  "Year":"2012",
  "imdbID":"tt2586634",
  "Type":"movie",
  "Poster": theflash
}
const App = () => {
  const [searchTerm, setSearchTerm] = useState([])
const searchMovies = async (title) =>{
const response = await fetch(`${API_URL}$s=${title}`);
const data  = await response.json();
console.log(data.search);
}
  useEffect(() =>{
    //  searchMovies('Spiderman');
  }, []);
  return (
    <div className="app">
      <h1> Movies Collections </h1>
      <div className="search">
        <input placeholder='Search for movies'
        value={searchTerm}
        onChange={(e) =>setSearchTerm(e.target.value)}/>
        <img src={searchIcon} alt="search" 
          onClick={() => searchMovies(searchTerm)}/>
      </div>
      <div className="container">
        <MovieCard movie1={movie1}/>
        <MovieCard movie1={movie2}/>
        <MovieCard movie1={movie3}/>
        <MovieCard movie1={movie4}/>
        <MovieCard movie1={movie4}/>
        <MovieCard movie1={movie5}/>
        <MovieCard movie1={movie6}/>
        <MovieCard movie1={movie7}/>
      </div>
 
    </div>
  );
}

export default App;
