// import React from 'react'
// import {useParams } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { logementList } from '../../datas/logementList';
// import Header from '../../components/Header';
// import Footer from '../../components/Footer';
// import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
// import Dropdown from '../../components/Dropdown';
// import { Navigate } from "react-router-dom";



// import "../../pages/LogementDetail/logementDetail.scss"
// import Caroussel from '../../components/Caroussel';

// function LogementDetail() {
  



//     const renderStars = (rating) => {

    
//         const stars = [];
//         const fullStars = rating;
//         const emptyStars = 5 - fullStars

//         for (let i = 0; i < fullStars; i++) {
//             stars.push(<FontAwesomeIcon key={`full-${i}`} icon={faStarSolid} className="star-filled"/>);
//         }
    
//         for (let i = 0; i < emptyStars; i++) {
//             stars.push(<FontAwesomeIcon key={`empty-${i}`} icon={faStarSolid} className="star-unfilled" />);
//         }
//           return stars;
        
//     }

//     const { id } = useParams();
  
//     const logement = logementList.find(logement => logement.id === id);
//     if (!logement) {
//       return <Navigate to="/error" />;
//       }
//   return (
//     <div className="xxx">
//     <Header/>
//     <div className="logement_main_div">
//     <Caroussel images={logement.pictures} />
//     <div className="logement_parent_div">
//     <div className='logement_title_div'>
//     <div className='logement_title_div1'>
//     <p className='logement_title'>{logement.title}</p>
//     <h6>{logement.location}</h6>
//     <div>
//     <div className="tags" >{logement.tags.map((tag, index) => (
//             <span className="tag_span" key={index}>{tag}</span>
//           ))}
//           </div>
      
//     </div>
   
   
//     </div>
    
//     <div className="logement_host_div">
//     <div className='.logement_title_div_right'>
//     <div className="logement_name_pic_div">
//     <h6>{logement.host.name}</h6>
//     <img src={logement.host.picture} alt={`${logement.host.name}`}/>
//     </div>
  
//     <div className="tag_star_div">
   
//    <div className="star-rating">{renderStars(logement.rating)}</div> 
//    </div>
//     </div>
  
   
  
//     </div>


//     </div>
   
   
 
 
   
//           <div className="dropdown_main_div">
//           <Dropdown title="Description" className="description" content={logement.description} />
//             <Dropdown title="Equipments" className="description" content={logement.equipments} />
//           </div>
    
//     </div>
    
        
        
         
          
//     </div>
 
         
    
//     <Footer/>
//   </div>
//   )
// }

// export default LogementDetail

import React from 'react'
import {useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { logementList } from '../../datas/logementList';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import Dropdown from '../../components/Dropdown';
import { Navigate } from "react-router-dom";
import "../../pages/LogementDetail/logementDetail.scss"
import Caroussel from '../../components/Caroussel';

function LogementDetail() {
  
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
      return <Navigate to="/error" />;
      }
  return (
    <div>
     <Header/>
       {/*  div including caroussel*/}
     <div className="logement_main_div">
   <Caroussel images={logement.pictures} />
   {/* parent div */}
   <div className='parent_div'>
   {/* 1st div */}
   <div className='logement_title_div1'>
   <p className='logement_title'>{logement.title}</p>
    <h6>{logement.location}</h6>
   
    <div className="tags" >{logement.tags.map((tag, index) => ( <span className="tag_span" key={index}>{tag}</span>
          ))}
  </div>

   </div>
   
      {/* 2nd div */}
       <div className='logement_title_div_right'>
   <div className="logement_name_pic_div">
    <h6>{logement.host.name}</h6>
     <img src={logement.host.picture} alt={`${logement.host.name}`}/>
   </div>
  
    <div className="tag_star_div">
   
  <div className="star-rating">{renderStars(logement.rating)}</div> 
   </div>
   </div>
    {/* 3rd div */}

        
   
   </div>
   
   </div>
   <div className="dropdown_main_div">
        <Dropdown title="Description" className="description" content={logement.description} />          
        <Dropdown title="Equipments" className="description" content={logement.equipments} />
         </div>
     <Footer/>

     </div>
  )
}

export default LogementDetail
