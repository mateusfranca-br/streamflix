import { useParams } from "react-router-dom";
import movies from "../../data/movies.json";
import "./MovieDetail.css";

export default function MovieDetail() {
  const { id } = useParams();
  const movie = movies.find(m => String(m.id) === id);

  if (!movie) {
    return <h2 style={{ textAlign: "center", marginTop: "50px" }}>Filme não encontrado</h2>;
  }

  return (
    <div className="movie-detail">
      <div
        className="movie-detail-banner"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0,0,0,.7), rgba(0,0,0,.9)), url(${movie.backdrop || movie.poster})`,
        }}
      >
        <div className="movie-detail-info">
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
          <p><strong>Gênero:</strong> {movie.genre}</p>
          <p><strong>Lançamento:</strong> {movie.release_date}</p>
        </div>
      </div>
    </div>
  );
}
