import "../css/Header.css";
import { FaCartShopping } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";
import LogoPagina from "../IMG/logo-pagina.jpg";

function Header() {
  return (
    <header>
      <img src={LogoPagina} alt="Logo de la pagina" />
      <ul>
        <li>
          <a href="">
            <VscAccount color="black" />
          </a>
        </li>
        <li>
          <a href="">
            <FaCartShopping color="black" />
          </a>
        </li>
        <li>
          <a href="">
            <button className="boton1" >Iniciar Sesion</button>
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
