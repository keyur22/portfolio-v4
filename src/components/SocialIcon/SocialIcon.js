import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import './SocialIcon.css';

const SocialIcon = () => {
    return (
        <div
            className="social-icons d-flex flex-wrap justify-content-center align-items-center pt-md-4">
            <a href="https://github.com/keyur22" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} className="icon m-2" />
            </a>
            <a href="https://www.linkedin.com/in/keyur-chaudhari-018257117/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedinIn} className="icon m-2" />
            </a>
            <a href="mailto:keyurchaudhari4@gmail.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faEnvelope} className="icon m-2" />
            </a>
        </div>
    );
};

export default SocialIcon;