import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-header-inner main-container">
        <Link to="/" className="brand">
          StreamFlix
        </Link>

        <nav className="nav">
          <Link to="/category/Ação">Ação</Link>
          <Link to="/category/Drama">Drama</Link>
          <Link to="/category/Comédia">Comédia</Link>
          <Link to="/category/Ficção">Ficção</Link>
          <Link to="/mylist" className="ml">Minha Lista</Link>
        </nav>
      </div>
    </header>
  )
}
