import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faSpotify, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faMusic } from '@fortawesome/free-solid-svg-icons'


const Footer = () => {
    return (
        <footer className='sticky bottom-0 left-0 right-0 flex justify-center border-t lg:border-hidden mt-auto'>
            <div className='text-xl flex py-3'>
                <a className='mx-2' href='https://www.instagram.com/zac.crook/'>
                    <FontAwesomeIcon icon={faInstagram} style={{color: "#000000",}} />
                </a>
                <a className='mx-2' href='https://www.youtube.com/@zac.croook'>
                    <FontAwesomeIcon icon={faYoutube} style={{color: "#000000",}} />
                </a>
                <a className='mx-2' href='https://open.spotify.com/artist/77a6pibaYeq6Ol2zJ2cSaC'>
                    <FontAwesomeIcon icon={faSpotify} style={{color: "#000000",}} />
                </a>
                <a className='mx-2' href='https://music.apple.com/us/artist/zac-crook/1111802998'>
                    <FontAwesomeIcon icon={faMusic} style={{color: "#000000",}} />
                </a>
            </div>
        </footer>
    )
}

export default Footer;