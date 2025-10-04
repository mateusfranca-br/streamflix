import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import movies from "../../data/movies.json";
import "./Details.css";

export default function Details() {
  const { id } = useParams();
  const movie = movies.find((m) => String(m.id) === id);

  const [inList, setInList] = useState(false);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("mylist")) || [];
    const exists = stored.find((item) => item.id === movie?.id);
    if (exists) setInList(true);
  }, [movie]);

  if (!movie) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "50px" }}>
        Filme não encontrado
      </h2>
    );
  }

  const toggleList = () => {
    const stored = JSON.parse(localStorage.getItem("mylist")) || [];

    if (inList) {
      // remover da lista
      const updated = stored.filter((item) => item.id !== movie.id);
      localStorage.setItem("mylist", JSON.stringify(updated));
      setInList(false);
    } else {
      // adicionar à lista
      stored.push(movie);
      localStorage.setItem("mylist", JSON.stringify(stored));
      setInList(true);
    }
  };

  return (
    <div className="details">
      <div
        className="details-banner"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0,0,0,.7), rgba(0,0,0,.9)), url(${
            movie.backdrop || movie.poster
          })`,
        }}
      >
        <div className="details-info">
          <h1>{movie.title}</h1>
          <p className="details-overview">{movie.overview}</p>
          <p>
            <strong>Gênero:</strong> {movie.genre}
          </p>
          <p>
            <strong>Lançamento:</strong> {movie.release_date}
          </p>

          <div className="details-buttons">
            <button className="play">▶ Assistir</button>
            <button className="mylist" onClick={toggleList}>
              {inList ? "✔ Remover da Lista" : "+ Minha Lista"}
            </button>
          </div>
        </div>
      </div>

      {/* Se existir trailer no JSON, mostra abaixo */}
      {movie.trailer && (
        <div className="details-trailer">
          <h2>Trailer</h2>
          <iframe
            width="100%"
            height="480"
            src={movie.trailer}
            title={movie.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
}
