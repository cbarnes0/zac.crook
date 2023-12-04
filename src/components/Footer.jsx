import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faSpotify, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className={`absolute bottom-0 left-0 right-0 flex justify-center border-t dark:border-slate-600 lg:border-hidden`}>
      <div className='text-xl flex py-3'>
        <a className='mx-2 dark:text-white text-black' href='https://www.instagram.com/zac.crook/'>
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a className='mx-2 dark:text-white text-black' href='https://www.youtube.com/@zac.croook'>
          <FontAwesomeIcon icon={faYoutube} />
        </a>
        <a className='mx-2 dark:text-white text-black' href='https://open.spotify.com/artist/77a6pibaYeq6Ol2zJ2cSaC'>
          <FontAwesomeIcon icon={faSpotify} />
        </a>
        <a className='mx-2 dark:text-white text-black' href='https://music.apple.com/us/artist/zac-crook/1111802998'>
          <FontAwesomeIcon icon={faMusic} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

