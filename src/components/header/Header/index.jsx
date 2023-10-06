import { Link } from "react-router-dom";
import logo from "../../../assets/Logo.png";
import "../../header/Header/styles.css";

export default function Header(){
    return(
          
        <nav>
            <div>
                <img src={logo} alt="Logotipo"/>
            </div>
            <div>
                <Link to="/singin"><span>ENTRAR</span></Link>
                <Link to="/singup"><span>CADASTRAR</span></Link>
            </div>
            
        </nav>

    )
}
