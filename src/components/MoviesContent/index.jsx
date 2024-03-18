import React from "react";
import { useState, useEffect } from "react";
import { getMovies } from "../../services";
import MoviesCard from "../MoviesCard";
import styles from "./MoviesContent.module.css";

function MoviesContent() {
  const [movie, setmovie] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    async function fetchData() {
      const response = await getMovies();
      console.log(response);
      setmovie(response.data.Search);
    }
    fetchData();
  }, []);
  console.log(movie);

  const handleSearchInput = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };
  console.log(query);

  const handleSearchButton = () => {
    const filteredData = movie.filter((item) =>
      item.Title.toString()
        .toLowerCase()
        .trim()
        .includes(query.toString().toLowerCase().trim())
    );
    console.log(filteredData);
    setFilteredMovies(filteredData);
    setQuery("");
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",

          gap: "16px",
          background: "rgba(186, 77, 0, 0.898)",
          position: "fixed",
          zIndex: "1",
          width: "100%",
          padding: "20px 16px 20px 16px",
        }}
      >
        <div>
          <img
            width={100}
            src="https://seeklogo.com/images/M/movie-time-cinema-logo-8B5BE91828-seeklogo.com.png"
          ></img>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "2rem",
          }}
        >
          <input
            value={query}
            onChange={handleSearchInput}
            style={{
              border: "0",
              borderRadius: "6px",
              outline: "0",
              padding: "0 30px 0 30px",
              color: "rgb(168, 91, 8)",
              fontFamily: "monospace",
              fontSize: "20px",
            }}
          ></input>
          <button onClick={handleSearchButton} className={styles.searc_button}>
            Search Movie
          </button>
        </div>
      </div>

      <MoviesCard movies={filteredMovies.length ? filteredMovies : movie} />
    </div>
  );
}

export default MoviesContent;
