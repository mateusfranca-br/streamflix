import './Banner.css'

export default function Banner({ movie }) {
  if (!movie) return null; 

  const backdrop = movie.backdrop || movie.poster || '';

  return (
    <section
      className="banner"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(0,0,0,.6), rgba(0,0,0,.2)), url(${backdrop})`
      }}
    >
      <div className="banner-inner main-container">
        <div className="banner-content">
          <h1>{movie.title}</h1>
          <p className="banner-overview">
            {(movie.overview || movie.synopsis || '').slice(0, 220)}
            {(movie.overview || movie.synopsis || '').length > 220 ? '...' : ''}
          </p>
          <div className="banner-actions">
            <a className="nf-btn add" href={`/details/${movie.id}`}>▶ Assistir</a>
            <a className="nf-btn secondary" href={`/details/${movie.id}`}>+ Minha Lista</a>
          </div>
        </div>
      </div>
    </section>
  )
}
