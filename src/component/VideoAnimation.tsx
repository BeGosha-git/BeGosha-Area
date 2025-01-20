import React, { useEffect, useRef } from 'react';

const VideoAnimation: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            video.play();
        }
    }, []);

    return (
        <div style={{ overflow: 'hidden', textAlign: 'center' }}>
            <video
                ref={videoRef}
                src="/perehod.mp4"
                style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', objectFit: 'fill', zIndex: '-1' }}
                muted
            />
        </div>
    );
};

export default VideoAnimation;