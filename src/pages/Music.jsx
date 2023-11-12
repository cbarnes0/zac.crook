import { Link } from 'react-router-dom'

const Music = () => {
    return (
        <div>
            <div className='relative min-h-100vh flex flex-col justify-center items-center text-white'>
                <div className='relative top-0 left-0 right-0 flex justify-center text-white font-bold py-4'>
                    <iframe
                        style={{ borderRadius: '12px' }}
                        src="https://open.spotify.com/embed/artist/77a6pibaYeq6Ol2zJ2cSaC?utm_source=generator&theme=0"
                        width="300"
                        height="425"
                        frameBorder="0"
                        allowFullScreen=""
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                    />
                </div>
                <div className='mb-16 relative top-0 left-0 right-0 flex justify-center text-white font-bold py-4'>
                    <iframe
                        style={{ borderRadius: '12px' }}
                        src="https://open.spotify.com/embed/album/4J63RVTG5C5RrfvyhENNiL?utm_source=generator&theme=0"
                        width="300"
                        height="425"
                        frameBorder="0"
                        allowFullScreen=""
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                    />
                </div>
            </div>
        </div>
        
    )
}

export default Music;