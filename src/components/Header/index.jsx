import { NavLink } from "react-router-dom"
import logo from "../../assets/logo.png"
import "../../styles/header.css"

function Header(){
    return(
        <div className="header">
        
        <img className="header_image" src={logo} alt="small_kasa_logo"/>
        <div className="header_links">
        <NavLink to="/accueil">Accueil</NavLink>
        <NavLink to="/apropos">Apropos</NavLink>
        </div>
         
          
          
        </div>
    )
}

export default Header