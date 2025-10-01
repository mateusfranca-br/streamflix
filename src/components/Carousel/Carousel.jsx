import MovieCard from '../MovieCard/MovieCard'
import './Carousel.css'

export default function Carousel({ title, movies }) {
  if (!movies || movies.length === 0) return null

  return (
    <section className="carousel main-container">
      <h3 className="carousel-title">{title}</h3>
      <div className="carousel-row">
        {movies.map((m) => (
          <MovieCard key={m.id} movie={m} />
        ))}
      </div>
    </section>
  )
}
