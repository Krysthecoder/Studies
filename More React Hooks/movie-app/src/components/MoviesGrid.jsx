import movies from '../Json/movies.json'
import { MovieCard } from './MovieCard'
import styles from '../styles/MoviesGrid.module.css'

export function MoviesGrid() {

  console.log(movies)

  return (
    <ul className={styles.moviesGrid}>
      {movies.map( (movie) => {
        return <MovieCard key={movie.id} movie={movie} />
      })}
    </ul>
  )
}