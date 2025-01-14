import React, { useState } from 'react';
import './ImageCarousel.css'; // Импорт стилей для карусели

interface ImageCarouselProps {
    images: string[];
    productName: string; // Новый пропс
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, productName }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="carousel-container">
            {images.length > 0 && (
                <>
                    <button className="carousel-button left" onClick={handlePrev}>
                        &#9664;
                    </button>
                    <div className="image-header">
                        <h2>{productName}</h2> {/* Имя продукта */}
                    </div>
                    <img
                        src={require(`../../products/${images[currentIndex]}`)}
                        alt={`Image ${currentIndex}`}
                        className="carousel-image"
                    />
                    <button className="carousel-button right" onClick={handleNext}>
                        &#9654;
                    </button>
                </>
            )}
        </div>
    );
}

export default ImageCarousel;