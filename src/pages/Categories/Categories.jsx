import { useParams } from 'react-router-dom'
import movies from '../../data/movies.json'
import MovieCard from '../../components/MovieCard/MovieCard'
import './Categories.css'

function normalize(text) {
  return (text || '')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
}

export default function Categories() {
  const { genre } = useParams()

  const filtered = movies.filter(
    (m) => normalize(m.genre) === normalize(genre)
  )

  return (
    <div className="main-container categories-page">
      <h2>Categoria: {genre}</h2>

      {filtered.length === 0 ? (
        <p>Nenhum título encontrado.</p>
      ) : (
        <div className="grid">
          {filtered.map((m) => (
            <MovieCard key={m.id} movie={m} />
          ))}
        </div>
      )}
    </div>
  )
}
