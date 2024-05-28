import { Link } from "react-router-dom"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import "../../pages/Error/Error.scss"

function Error(){
    return(
        <div>
        <Header/>
        <div className="footer_main_div">
        <h1 className="footer_number">404</h1>
<p className="footer_text">Oups! La page que vous demandez n'existe pas</p>
<Link className="footer_link" to="/accueil">Retourner sur la page d'accueil</Link>
        </div>

<Footer/>
        </div>
      
    )
}

export default Error