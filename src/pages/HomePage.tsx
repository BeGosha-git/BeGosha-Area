import React, { useEffect, useRef } from 'react';
import '../pages.css';

const HomePage = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
      const video = videoRef.current;
      if (video) {
          video.play();
      }
  }, []);

  return (
    <div className='PageForm'>
      <div style={{ overflow: 'hidden', textAlign: 'center', marginTop: '6vh' }}>
          <video
              ref={videoRef}
              src="/home.mp4"
              style={{ position: 'relative', top: 0, left: 0, width: '100vw', height: '100vh', objectFit: 'cover', zIndex: '-1' }}
              muted
              loop
          />
      </div>
    </div>
  )
};

export default HomePage;
