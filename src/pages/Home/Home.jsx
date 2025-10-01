import movies from '../../data/movies.json'
import Banner from '../../components/Banner/Banner'
import Carousel from '../../components/Carousel/Carousel'
import './Home.css'
export default function Home(){const featured=movies[0];const genres=[...new Set(movies.map(m=>m.genre))].filter(Boolean);return (<div><Banner movie={featured}/><main className="main-container">{genres.map(g=> <Carousel key={g} title={g} movies={movies.filter(m=> (m.genre||'').toLowerCase()===g.toLowerCase())} />)}</main></div>)}
