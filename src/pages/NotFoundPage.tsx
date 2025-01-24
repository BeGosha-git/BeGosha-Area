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
            <Box sx={{textAlign: 'center'}}>
                <Typography className="page-not-found__title" variant="h1" component="h1">
                    Уупс!
                </Typography>
                <Box className="page-not-found__animation-container">
                    <Box className="page-not-found__illustration"></Box>
                </Box>
                <Typography className="page-not-found__message" component="p">
                    Вы попали куда-то не туда...
                </Typography>
                <video
                    ref={videoRef}
                    src="/home.mp4"
                    style={{ position: 'relative', top: 4, left: 0, width: '70vw', height: '70vh', objectFit: 'cover', zIndex: '-1' }}
                    muted
                    loop
                />
            </Box>
        </div>
    )
}

export default NotFoundPage