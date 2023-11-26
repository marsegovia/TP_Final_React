import { useEffect, useState } from "react";
import "../css/Inicio.css";
import axios from "axios";

function Inicio() {
  const [fotos, setFotos] = useState([]);

  const obtenerFotos = async () => {
    const { data } = await axios.get(
      `https://api.unsplash.com/search/photos?query=art`,
      {
        headers: {
          Authorization:
            "Client-ID 2H2WmJE_jIOiV-fYP1k7LqnNlJajv07Xd6NJmdfVJNg",
        },
      }
    );

    setFotos(data.results);
  };

  useEffect(() => {
    obtenerFotos();
  }, []);

  return (
    <>
      <div className="intro" style={{}}>
        <h1>VIMART</h1>
        <h3>
          Te presentamos una muy variada lista <br /> de las obras mas populares
          del mundo
        </h3>
        <button className="boton">Ver la coleccion</button>
      </div>

      <h2 className="texto"> Catálogo de Objetos</h2>

      <div className="catalogo">
        {fotos.map((foto) => (
          <div className="producto">
            <img src={foto.urls.thumb}></img>
            <h2>{foto.alt_description}</h2>
            <p>{foto.description}</p>
            <p>${foto.likes}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Inicio;
