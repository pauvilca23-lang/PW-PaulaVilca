import { useState } from "react";
import axios from "axios";

function Contacto() {
  const [formulario, setFormulario] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  const enviarFormulario = async (e) => {
    e.preventDefault();

    try {
      const respuesta = await axios.post(
        "http://localhost:3000/contacto",
        formulario
      );

      alert(respuesta.data.mensaje);
    } catch (error) {
      alert("Error al enviar mensaje");
    }
  };

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <form onSubmit={enviarFormulario}>
        <h1>Contacto</h1>

        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          onChange={handleChange}
        />

        <br />
        <br />

        <input
          type="email"
          name="email"
          placeholder="Correo"
          onChange={handleChange}
        />

        <br />
        <br />

        <textarea
          name="mensaje"
          placeholder="Escriba su mensaje"
          onChange={handleChange}
        />

        <br />
        <br />

        <button type="submit">
          Enviar
        </button>
      </form>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18..."
        width="400"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        title="Mapa"
      ></iframe>
    </div>
  );
}

export default Contacto;