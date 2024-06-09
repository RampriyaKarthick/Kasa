import "./Banner.scss"
import React from 'react'

function Banner({ src, alt, showText,isAbout }) {
  return (
    <div className="banner-container container_banner">
       <img className={`banner-img ${isAbout ? "img_banner" : "img_apropos"}` } src={src} alt={alt} />
      {showText && <div className="banner-text text">Chez vous,<span className="banner_span"> partout et ailleurs</span> 
    </div>}
 
  </div>
  )
}

export default Banner