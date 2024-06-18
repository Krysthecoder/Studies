import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";
import { MovieCard } from "../components/MovieCard"
import styles from "../styles/MoviesGrid.module.css";
import { Spinner } from "./Spinner";
import { useQuery } from "../hooks/UseQuery";



export function MoviesGrid() {

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  const query = useQuery();
  const search = query.get("search");
  console.log(search)

  useEffect(() => {
    setIsLoading(true);
    const searchURL = search ? "/search/movie?query=" + search : "/discover/movie";
    get(searchURL).then((data) => {
      setMovies(data.results);
      setIsLoading(false);
    });
  }, [search]);

  if(isLoading){
    return <Spinner />
  }

  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}