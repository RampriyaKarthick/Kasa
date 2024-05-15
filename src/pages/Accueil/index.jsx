import '../../App.css';
import Header from '../../components/Header';
import { logementList } from '../../datas/logementList';
import "../../styles/frontPage.css"

function Home() {
  return (
    <div className="App">
    <Header/>
    <ul className="kasa-logement-list">
{
  logementList.map((x) => <div className="kasa-logement-div">
  <img className="kasa-logement-image" src={x.cover} alt="imagecover"/>
  <h6 className="kasa-logement-title">{x.title}</h6></div>)
}
    </ul>
   
    </div>
  );
}

export default Home;
