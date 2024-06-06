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
import React from 'react'

import aboutPage from "../../assets/aboutPage.jpg"
import Banner from '../Banner';
import Dropdown from '../Dropdown';


function Index() {
 
  return (
    <div className="xxx">
     <div className="aboutcontent_image-container">
     
     <Banner src={aboutPage} alt="about_page_image" showText={false} />
     </div>
     
  <div className='about_parent_container'>
  {aboutList.map((about, index) => (
                <Dropdown key={about.id} title={about.title} content={about.content} />
            ))}
 
        </div>


    </div>
  )
}

export default Index