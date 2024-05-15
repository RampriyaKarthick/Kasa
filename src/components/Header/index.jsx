import { Link } from "react-router-dom"

function Header(){
    return(
        <div>
           
            <Link to="/accueil">Accueil</Link>
            <Link to="/apropos">A props</Link>
        </div>
    )
}

export default Header