import { NavLink } from "react-router-dom"
import logo from "../../assets/logo.png"
import "../../components/Header/header.scss"

function Header(){
    return(
        <div className="header">
        <div className="header_image">
        <img  src={logo} alt="small_kasa_logo"/>
        </div>
       
        <div className="header_links">
        <NavLink to="/accueil">Accueil</NavLink>
        <NavLink to="/apropos">Apropos</NavLink>
        </div>
         
          
          
        </div>
    )
}

export default Header