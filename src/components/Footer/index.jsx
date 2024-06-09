import footerLogo from "../../assets/footerLogo.png"
import "../../components/Footer/footer.scss"
function Footer(){
return(
    <div className="footer_content">
<img className="footer_image" src={footerLogo} alt="footer_logo"/>
<div className="para_div">
<p className="footer_text">© 2020 Kasa. All rights reserved</p>
</div>
    </div>
)
}
export default Footer