import React, { useState } from 'react';
import './ImageCarousel.css';

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
        <div className="carousel-container">
            {product_images.length > 0 ? (
                <div className="carousel-content">
                    <button className="carousel-button left" onClick={handlePrev} aria-label="Предыдущее изображение">
                        &#9664;
                    </button>
                    <img
                        src={require(`../../products/${productName}/${product_images[currentIndex]}`)}
                        alt={`Картинка - ${currentIndex + 1} из ${product_images.length}`}
                        className="carousel-image"
                    />
                    <button className="carousel-button right" onClick={handleNext} aria-label="Следующее изображение">
                        &#9654;
                    </button>
                </div>
            ) : (
                <p>Загрузка изображений...</p>
            )}
        </div>
    );
};

export default ImageCarousel;