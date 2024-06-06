import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import "../Dropdown/Dropdown.scss"
import "../About/about.scss"

function Dropdown({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="about_container">
            <div className="about_title_container" onClick={toggleDropdown}>
                <h3>{title}</h3>
                <FontAwesomeIcon icon={faChevronDown} className={`chevron-icon ${isOpen ? 'open' : 'closed'}`} />
            </div>
            {isOpen && (
               
                    <p>{content}</p>

            )}
        </div>
    );
}

export default Dropdown