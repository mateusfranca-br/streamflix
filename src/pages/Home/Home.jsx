import { useState, useEffect } from 'react';
import movies from '../../data/movies.json';
import Banner from '../../components/Banner/Banner';
import Carousel from '../../components/Carousel/Carousel';
import SearchBar from '../../components/SearchBar/SearchBar';
import './Home.css';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [featuredIndex, setFeaturedIndex] = useState(0);

  const genres = [...new Set(movies.map(m => m.genre))].filter(Boolean);

  // Filmes filtrados pelo search
  const filteredMovies = movies.filter(m =>
    m.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Troca o destaque a cada 3,5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setFeaturedIndex((prev) => (prev + 1) % movies.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Banner com troca automática */}
      <Banner movie={movies[featuredIndex]} />

      {/* Barra de busca */}
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <main className="main-container">
        {searchTerm ? (
          <Carousel
            key="search"
            title={`Resultados para "${searchTerm}"`}
            movies={filteredMovies}
          />
        ) : (
          genres.map(g =>
            <Carousel
              key={g}
              title={g}
              movies={movies.filter(m =>
                (m.genre || '').toLowerCase() === g.toLowerCase()
              )}
            />
          )
        )}
      </main>
    </div>
  );
}
