import React from 'react'
import {useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { logementList } from '../../datas/logementList';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';

import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import "../../pages/LogementDetail/logementDetail.scss"

function LogementDetail() {
    const [descriptionIndex, showDescriptionIndex] =useState(false);
    const [equipmentsIndex, showEquipmentsIndex] = useState(false)

    const toggleDescriptionchevron =(index) =>{
        showDescriptionIndex(descriptionIndex === index ? null : index)
    }

    const toggleEquipmentschevron =(index) =>{
        showEquipmentsIndex(equipmentsIndex === index ? null : index)
    }



    const renderStars = (rating) => {

    
        const stars = [];
        const fullStars = rating;
        const emptyStars = 5 - fullStars

        for (let i = 0; i < fullStars; i++) {
            stars.push(<FontAwesomeIcon key={`full-${i}`} icon={faStarSolid} className="star-filled"/>);
        }
    
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<FontAwesomeIcon key={`empty-${i}`} icon={faStarSolid} className="star-unfilled" />);
        }
          return stars;
        
    }

    const { id } = useParams();
  
    const logement = logementList.find(logement => logement.id === id);
    if (!logement) {
        return <div>Logement not found</div>;
      }
  return (
    <div>
    <Header/>
    <div className="logement_main_div">
    <img src={logement.cover} alt="imagecover" />
    <div>
    <div className='logement_title_div'>
    <p className='logement_title'>{logement.title}</p>
    <h6>{logement.host.name}</h6>
    </div>
   
    <h6>{logement.location}</h6>
   <div className="tag_star_div">
   <div className="tags" >{logement.tags.map((tag, index) => (
            <span className="tag_span" key={index}>{tag}</span>
          ))}
          </div>
          <div className="star-rating">{renderStars(logement.rating)}</div>
   </div>
 
   
          <div>
          <div>
          <h3>Description</h3>
   
   <FontAwesomeIcon onClick={() => toggleDescriptionchevron(logement.index)} icon={descriptionIndex === logement.index ? faChevronUp : faChevronDown} />
   {descriptionIndex === logement.index &&  <p>{logement.description}</p>}
         </div>

           <div>
          <h3>Equipments</h3>
          <FontAwesomeIcon onClick={() => toggleEquipmentschevron (logement.index)} icon={equipmentsIndex === logement.index ? faChevronUp : faChevronDown} 
           />
         {equipmentsIndex === logement.index && <p>{logement.equipments}</p> } 
          </div>
          </div>
    
    </div>
    
        
        
         
          
    </div>
 
         
    
    <Footer/>
  </div>
  )
}

export default LogementDetail
