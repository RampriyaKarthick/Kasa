import { NavLink} from "react-router-dom"
import logo from "../../assets/logo.png"
import "../../components/Header/header.scss"

function Header(){
    
    return(
        <div className="header accueil_header">
        <div className="header_image">
        <img  src={logo} alt="small_kasa_logo"/>
        </div>
       
        <div className="header_links accueil_links">
        <NavLink to="/accueil" className={({ isActive }) => (isActive ? 'active-link' : '')}>Accueil</NavLink>
        <NavLink to="/apropos" className={({ isActive }) => (isActive ? 'active-link' : '')}>Apropos</NavLink>
        </div>
         
          
          
        </div>
    )
}

export default Header