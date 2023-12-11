import MovieCard from "./MovieCard"
import "./MoviesCards.css"

const MoviesCards = ({ movies }) => {
    return <div className="moviescards-container">
      {
        movies.map((movie, index) => (
            <MovieCard key={index} {...movie} />
        ))
      }
  </div>
}

export default MoviesCards