import { useEffect, useState } from "react";
import axios from "axios";

function Inicio() {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    axios
      .get("https://ghibliapi.vercel.app/films")  //solicitud a API de peliculas de estudio Ghibli
      .then((respuesta) => {
        setPeliculas(respuesta.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Películas Studio Ghibli</h1>

      {peliculas.slice(0, 6).map((pelicula) => (
        <div key={pelicula.id}>
          <img
            src={pelicula.movie_banner}
            alt={pelicula.title}
            width="400"
          />

          <h2>{pelicula.title}</h2>

          <p>
            <strong>Director:</strong> {pelicula.director}
          </p>

          <p>
            <strong>Año:</strong> {pelicula.release_date}
          </p>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default Inicio;