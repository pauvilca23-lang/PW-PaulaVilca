import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Inicio from "./pages/Inicio";
import Favoritos from "./pages/Favoritos";
import Contacto from "./pages/Contacto";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>

          <li>
            <Link to="/favoritos">Favoritos</Link>
          </li>

          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;