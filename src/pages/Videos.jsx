import React from 'react';

const Videos = () => {
  return (
    <div className="flex justify-center items-center mt-16 mx-28 w-full h-full">
      <div className="w-full max-w-screen-lg">
        <div className="relative" style={{ paddingTop: '56.25%' }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/LyqoCL6Cimg?si=YKVoPuVsq10Fcy-b"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};


export default Videos;