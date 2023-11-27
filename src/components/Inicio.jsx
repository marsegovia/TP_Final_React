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
        <a href="#seccion-catalogo">
          <button className="boton">Ver la coleccion</button>
        </a>
      </div>

      <h2 className="texto"> Catálogo de Objetos</h2>

      <div id="seccion-catalogo" className="catalogo">
        {fotos.map((foto) => (
          <div className="producto">
            <img className="producto--imagen" src={foto.urls.thumb}></img>
            <div className="producto--textos">
              <h2 className="producto--titulo">{foto.alt_description}</h2>
              <p className="producto--descripcion">{foto.description}</p>
              <p>${foto.likes}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Inicio;
