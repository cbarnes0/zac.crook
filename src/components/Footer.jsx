import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faSpotify, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const isBottom = scrollY > document.body.scrollHeight - window.innerHeight - 100;

      // Set the visibility based on whether the scroll position is close to the bottom
      setIsVisible(isBottom);
    };

    // Attach the event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer className={`sticky bottom-0 left-0 right-0 flex justify-center border-t lg:border-hidden ${isVisible ? 'fade-in' : 'fade-out'}`}>
      <div className='text-xl flex py-3'>
        <a className='mx-2' href='https://www.instagram.com/zac.crook/'>
          <FontAwesomeIcon icon={faInstagram} style={{ color: "#000000" }} />
        </a>
        <a className='mx-2' href='https://www.youtube.com/@zac.croook'>
          <FontAwesomeIcon icon={faYoutube} style={{ color: "#000000" }} />
        </a>
        <a className='mx-2' href='https://open.spotify.com/artist/77a6pibaYeq6Ol2zJ2cSaC'>
          <FontAwesomeIcon icon={faSpotify} style={{ color: "#000000" }} />
        </a>
        <a className='mx-2' href='https://music.apple.com/us/artist/zac-crook/1111802998'>
          <FontAwesomeIcon icon={faMusic} style={{ color: "#000000" }} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

