import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { logementList } from '../../datas/logementList';
import "../../pages/Accueil/accueil.scss";
import rock from "../../assets/rock.jpg";
import { useNavigate } from 'react-router-dom';
import Banner from '../../components/Banner';

function Home() {
  const navigate = useNavigate();
  const handleClick = (logement) => {
    navigate(`/logement/${logement.id}`);
  };

  return (
    <div className="App">
      <Header />
      <div className="content-container">
        <div className="welcomecontent_image-container">
          <Banner src={rock} alt="welcome_page_image" showText={true} />
        </div>
        <div className="main-div">
          <ul className="kasa-logement-list">
            {logementList.map((logement) => (
              <div className="kasa-logement-div" key={logement.id} onClick={() => handleClick(logement)}>
                <img className="kasa-logement-image" src={logement.cover} alt="imagecover" />
                <h6 className="kasa-logement-title">{logement.location}</h6>
              </div>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
