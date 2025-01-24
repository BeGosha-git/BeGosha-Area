import React, { useEffect, useRef } from 'react';
import { Box, Typography } from '@mui/material'
import '../pages.css';

const NotFoundPage = () => {
      const videoRef = useRef<HTMLVideoElement>(null);
    
      useEffect(() => {
          const video = videoRef.current;
          if (video) {
              video.play();
          }
      }, []);
    
    return (
        <div className='PageForm'>
            <Box sx={{position: 'fixed', textAlign: 'center',backgroundColor: '#010203', marginTop: '-5vh', marginLeft: '8vw'}}>
                <Box className="page-not-found__animation-container">
                    <Box className="page-not-found__illustration"></Box>
                </Box>
                <Typography className="page-not-found__message" variant="h2" component="h3" sx={{
                    marginBottom: 0,
                    marginTop: '7vh',
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".2rem"
                }}>
                    404 Похоже вы попали куда-то не туда...
                </Typography>
                <video
                    ref={videoRef}
                    src="/waiting.mp4"
                    style={{ position: 'fixed', top: '10vh', left: 0, width: '100vw', height: '100vh', objectFit: 'cover', zIndex: '-1' }}
                    muted
                    loop
                />
            </Box>
        </div>
    )
}

export default NotFoundPage