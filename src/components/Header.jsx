import '../css/Header.css'
import { FaCartShopping } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";

function Header(){
    return(
        <>
        <header>
            <img src="src/IMG/1.png" alt="Logo de la pagina" />
            <ul>
                <a href=""><li><VscAccount/></li></a>
                <a href=""><li><FaCartShopping /></li></a>
                <a href=""><li><button className='boton1'>Iniciar sesion</button></li></a>
            </ul>
        </header>
        </>
    )
}

export default Header