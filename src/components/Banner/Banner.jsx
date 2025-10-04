import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

export default function Banner({ movie }) {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(true);
    const timeout = setTimeout(() => setFade(false), 800);
    return () => clearTimeout(timeout);
  }, [movie]);

  if (!movie) return null;

  const backdrop = movie.backdrop || movie.poster || "";

  return (
    <section
      className={`banner ${fade ? "fade" : ""}`}
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(0,0,0,.6), rgba(0,0,0,.2)), url(${backdrop})`,
      }}
    >
      <div className="banner-inner main-container">
        <div className="banner-info">
          <Link to={`/details/${movie.id}`} className="banner-link">
            <h1>{movie.title}</h1>
          </Link>
          <p>{movie.overview}</p>
        </div>
      </div>
    </section>
  );
}
