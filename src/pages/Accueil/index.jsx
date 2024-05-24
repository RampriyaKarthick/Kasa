import '../../App.css';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { logementList } from '../../datas/logementList';
import "../../pages/Accueil/accueil.scss"
import rock from "../../assets/rock.jpg"
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/logement/${id}`);
  };

  return (
    <div className="App">
    <Header/>
    <div className='main-div'>
    <div className="welcomecontent_image-container">
     
     <img className="welcomepage_img" src={rock} alt="about_page_image"/>
     </div>
    <ul className="kasa-logement-list">
{
  logementList.map((x) => <div className="kasa-logement-div" onClick={() => handleClick(x.id)}>
  <img className="kasa-logement-image" src={x.cover} alt="imagecover"/>
  <h6 className="kasa-logement-title">{x.location}</h6></div>)
}
    </ul>
    </div>
    
    <Footer/>
   
    </div>
  );
}

export default Home;
