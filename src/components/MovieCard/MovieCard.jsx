import { Link } from 'react-router-dom'
import './MovieCard.css'

export default function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <Link to={`/details/${movie.id}`}>
        <div className="poster-wrap">
          <img src={movie.poster} alt={movie.title} />
        </div>
        <div className="card-title">{movie.title}</div>
      </Link>
    </div>
  )
}
