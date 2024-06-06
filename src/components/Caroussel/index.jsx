import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import "../Caroussel/Caroussel.scss"

function Caroussel({images}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const nextSlide = () => {
      console.log('Next Slide');
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      };
    
      const prevSlide = () => {
        console.log('Previous Slide');
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      };
  return (
    <div className="carousel">
    <FontAwesomeIcon
      icon={faChevronLeft}
      className="carousel__button carousel__button--left"
      onClick={prevSlide}
    />
    <div className="carousel__slides">
      {images.map((image, index) => (
        <div
          className={`carousel__slide ${index === currentIndex ? 'carousel__slide--active' : ''}`}
          key={index}
        >
          <img src={image} alt={`Slide ${index}`} className="carousel__image" />
          <div className="carousel__numbering">
                            {index + 1}/{images.length}
                        </div>
        </div>
      ))}
    </div>
    <FontAwesomeIcon
      icon={faChevronRight}
      className="carousel__button carousel__button--right"
      onClick={nextSlide}
    />
  </div>
    
  )
}

export default Caroussel