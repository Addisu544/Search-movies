import { React, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import searchIcon from "./search.svg";
import Cards from "./Cards.js";
const API_URL = "http://www.omdbapi.com?apikey=526fd288";
const movie1 = {
  Title: "Batman Begins",
  Year: "2005",
  imdbID: "tt0372784",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
};
export default function App() {
  useEffect(() => {
    searchMovies("Avatar");
  }, []);
  const [searchname, setSearchname] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  return (
    <div className="app">
      <h1> my movies</h1>
      <div className="search">
        <input
          placeholder="serch movies here eg: Avatar"
          value={searchname}
          onChange={(e) => setSearchname(e.target.value)}
        />
        <img
          src={searchIcon}
          alt="posterimage"
          onClick={() => searchMovies(searchname)}
        />
      </div>

      {movies.length > 0 ? (
        <div className="container">
          {movies.map((mv) => (
            <Cards movie={mv} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>no movies here</h2>
        </div>
      )}
    </div>
  );
}
