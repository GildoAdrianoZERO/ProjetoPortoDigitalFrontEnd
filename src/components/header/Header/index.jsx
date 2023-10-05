import { Link } from "react-router-dom";

export default function Header(){
    return(
          
        <nav>
            <div>
                <Link to="/"><img src="#" alt="Logotipo"/></Link>
            </div>
            <div>
                <Link to="/singin">ENTRAR</Link>
            </div>
            <div>
                <Link to="/singup">CADASTRAR</Link>
            </div>
        </nav>

    )
}
