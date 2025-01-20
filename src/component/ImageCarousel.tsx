import React, { useState } from 'react';
import { Box, IconButton, CircularProgress } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';

interface ImageCarouselProps {
    product_images: string[];
    productName: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ product_images, productName }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % product_images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + product_images.length) % product_images.length);
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
            {product_images.length > 0 ? (
                <>
                    <IconButton
                        onClick={handlePrev}
                        sx={{
                            position: 'absolute',
                            left: '-50px',
                            transition: "transform 0.8s ease",
                            backgroundColor: '#ADADAD',
                            '&:hover': {
                                backgroundColor: '#FDFDFD',
                                transform: 'scale(1.2)',
                            },
                        }}
                        aria-label="Предыдущее изображение"
                    >
                        <ArrowBack />
                    </IconButton>

                    <img
                        src={require(`../products/${productName}/${product_images[currentIndex]}`)}
                        alt={`Картинка - ${currentIndex + 1} из ${product_images.length}`}
                        style={{
                            borderRadius: '8px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                            maxWidth: '100%',
                            minWidth: 'auto',
                            height: '70vh',
                        }}
                    />

                    <IconButton
                        onClick={handleNext}
                        sx={{
                            position: 'absolute',
                            right: '-50px',
                            transition: "transform 0.8s ease",
                            backgroundColor: '#ADADAD',
                            '&:hover': {
                                backgroundColor: '#FDFDFD',
                                transform: 'scale(1.2)',
                            },
                        }}
                        aria-label="Следующее изображение"
                    >
                        <ArrowForward />
                    </IconButton>
                </>
            ) : (
                <CircularProgress color="inherit" />
            )}
        </Box>
    );
};

export default ImageCarousel;