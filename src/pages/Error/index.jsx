import { Link } from "react-router-dom"
import Header from "../../components/Header"
function Error(){
    return(
        <div>
        <Header/>
<h1>404</h1>
<p>Oups! La page que vous demandez n'existe pas</p>
<Link to="/accueil">Retourner sur la page d'accueil</Link>
        </div>
    )
}

export default Error