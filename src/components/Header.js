import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAirbnb,
    faLinkedin,
    faMedium,
    faStackOverflow,
    faGithub
} from '@fortawesome/free-brands-svg-icons';


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
                <a href='index.html'>Sections</a>
                <a href='#'>Contact Me</a>
            </div>
        </nav>
    );
}


export default Header;