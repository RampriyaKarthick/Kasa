import "./Banner.scss"
import React from 'react'

function Banner({ src, alt }) {
  return (
    <div className="banner-container">
    <img className="banner-img" src={src} alt={alt} />
  </div>
  )
}

export default Banner