
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Details from "./pages/Details/Details";
import MyList from "./pages/MyList/MyList";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Categories from "./pages/Categories/Categories";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/mylist" element={<MyList />} />
        <Route path="/category/:genre" element={<Categories />} />
        <Route path="*" element={<div style={{padding:20}}>Página não encontrada</div>} />
      </Routes>
      <Footer />
    </Router>
  );
}
