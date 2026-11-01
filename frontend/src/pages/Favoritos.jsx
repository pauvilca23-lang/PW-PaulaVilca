import peliculas from "../data/peliculas";

function Favoritos() {
  return (
    <div>
      <h1>Películas Favoritas</h1>

      {peliculas.map((pelicula) => (
        <div key={pelicula.id}>
          <img
            src={pelicula.imagen}
            alt={pelicula.titulo}
            width="250"
          />

          <h2>{pelicula.titulo}</h2>

          <p>
            <strong>Género:</strong> {pelicula.genero}
          </p>

          <p>
            <strong>Año:</strong> {pelicula.anio}
          </p>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default Favoritos;