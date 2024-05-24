// import React, { useState } from "react";

// function About({ title, content }) {
//     const [isOpen, setIsOpen] = useState(false); 

//     const toggledown = () => {
//         setIsOpen(!isOpen)
//     }
//   return (
//     <div className="collapse__dropdown__container">
//       <div className="collapse__dropdown__title">
//         <h2>{title}</h2>
//         <i className="fa-solid fa-chevron-up"></i>
//         <p onClick={toggledown}>
//           {isOpen ? (
//             <i className="fa-solid fa-chevron-up"></i>
//           ) : (
//             <i className="fa-solid fa-chevron-down"></i>
//           )}
//         </p>
//       </div>
//       Si le collapse est à TRUE alors il affichera la description
//       <div className="collapse__dropdown__content">
//         {isOpen && <p>{content}</p>}
//       </div>
//     </div>
//   );

// }

// export default About
import { aboutList } from '../../datas/about'
import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import aboutPage from "../../assets/aboutPage.jpg"


function Index() {
    const [currentIndex, setCurrentIndex] = useState(null);

    const toggleChevron = (index) => {
      setCurrentIndex(currentIndex === index ? null : index);
    };
  return (
    <div className="xxx">
     <div className="aboutcontent_image-container">
     
     <img className="aboutpage_img" src={aboutPage} alt="about_page_image"/>
     </div>
      {aboutList.map((about, index) => (
  <div key={about.id} className='about_parent_container'>
  <div className="about_container">

  <div className="about_title_container">
  <h3>{about.title}</h3>
            <FontAwesomeIcon onClick={() => toggleChevron(index)} icon={currentIndex === index ? faChevronUp : faChevronDown} style={{ marginLeft: '8px' }} />
          </div>
          {currentIndex === index && <p>{about.content}</p>}
  </div>

 
        </div>
))}

    </div>
  )
}

export default Index