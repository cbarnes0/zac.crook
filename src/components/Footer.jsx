import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faSpotify, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faMusic } from '@fortawesome/free-solid-svg-icons'


const Footer = () => {
    return (
        <footer>
            <FontAwesomeIcon icon={faInstagram} style={{color: "#000000",}} />
            <FontAwesomeIcon icon={faYoutube} style={{color: "#000000",}} />
            <FontAwesomeIcon icon={faSpotify} style={{color: "#000000",}} />
            <FontAwesomeIcon icon={faMusic} style={{color: "#000000",}} />
        </footer>
    )
}

export default Footer;