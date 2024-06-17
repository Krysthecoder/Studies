import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";
import { MovieCard } from "../components/MovieCard"
import styles from "../styles/MoviesGrid.module.css";
export function MoviesGrid() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    get("/discover/movie").then((data) => {
      setMovies(data.results);
    });
  }, []);
  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}