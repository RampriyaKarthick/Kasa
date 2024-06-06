import "./Banner.scss"
import React from 'react'

function Banner({ src, alt, showText }) {
  return (
    <div className="banner-container">
       <img className="banner-img" src={src} alt={alt} />
      {showText && <div className="banner-text">Chez vous, partout et ailleurs</div>}
 
  </div>
  )
}

export default Banner