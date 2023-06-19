import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAirbnb,
    faLinkedin,
    faMedium,
    faStackOverflow,
    faGithub
} from '@fortawesome/free-brands-svg-icons';

import {Routes, Route, Link} from 'react-router-dom';

const socials = [
    {
      icon: faAirbnb,
      url: "mailto: hello@example.com",
    },
    {
      icon: faGithub,
      url: "https://github.com",
    },
    {
      icon: faLinkedin,
      url: "https://www.linkedin.com",
    },
    {
      icon: faMedium,
      url: "https://medium.com",
    },
    {
      icon: faStackOverflow,
      url: "https://stackoverflow.com",
    },
  ];

const handleCLick = function(anchor) {
  const id = `${anchor}-section`;
  const element = document.getElementById(id);
  if(element) {
    element.scrollIntoView({
      behavior:"smooth",
      block:"start",
    });
  }
};

function Header() {
    return (
        <nav className = "navbar">
            <div>
                {
                    socials.map((social) => {
                        return(
                            <a href={social.url}><FontAwesomeIcon icon={social.icon}></FontAwesomeIcon></a>
                        )
                    })
                }
            </div>
            <div>
                <a href='#projects' onClick={handleCLick}>Projects</a>
                <a href='#contact-me' onClick={handleCLick}>Contact Me</a>
            </div>
        </nav>
    );
}


export default Header;