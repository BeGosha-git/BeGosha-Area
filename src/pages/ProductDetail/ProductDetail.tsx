import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ImageCarousel from '../../component/ImageCarousel/ImageCarousel';
import './ProductDetail.css';
import { useCart } from '../../context/CartContext/CartContext';

export interface Product {
    id: string;
    name: string;
    product_images: string[];
    description: string;
    feedback: Array<{
        user: string;
        comment: string;
        rating: number;
    }>;
}

const ProductDetail: React.FC = () => {
    const { productName } = useParams<{ productName: string }>();
    const [product, setProduct] = useState<Product | null>(null);
    const { addToCart, addToFavorites } = useCart(); // Используем контекст

    useEffect(() => {
        const fetchProductData = async () => {
            const response = await fetch(`../../products/${productName}/info.json`);
            const data: Product = await response.json();
            setProduct(data);
        };

        if (productName) {
            fetchProductData();
        }
    }, [productName]);

    const handleAddToCart = () => {
        if (product) {
            const productWithPrice = { ...product, price: 100 }; // Пример цены
            addToCart(productWithPrice);
            alert(`${product.name} добавлен в корзину!`);
        }
    };

    const handleAddToFavorites = () => {
        if (product) {
            addToFavorites(product);
            alert(`${product.name} добавлен в избранное!`);
        }
    };

    return (
        <div className="container">
            {product ? (
                <>
                    <h1>{product.name}</h1>
                    <div className="image-carousel">
                        <ImageCarousel product_images={product.product_images} productName={product.name} />
                    </div>
                    <p className="description">{product.description}</p>
                    <h2 className="feedback-title">Отзывы</h2>
                    <ul className="feedback-list">
                        {product.feedback.map((feedback, index) => (
                            <li key={index} className="feedback-item">
                                <strong>{feedback.user}:</strong> {feedback.comment} - {'★'.repeat(feedback.rating)}
                            </li>
                        ))}
                    </ul>
                    <div className="buttons-container">
                        <button onClick={handleAddToCart} className="add-to-cart-button">В корзину</button>
                        <button onClick={handleAddToFavorites} className="add-to-favorites-button">В избранное</button>
                    </div>
                </>
            ) : (
                <p className="loading">Загрузка...</p>
            )}
        </div>
    );
};

export default ProductDetail;