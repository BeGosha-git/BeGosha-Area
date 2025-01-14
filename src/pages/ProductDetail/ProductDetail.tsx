//<img src={require(`../../products/${id}/${product.image}`)} alt={product.name} />

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ImageCarousel from '../../component/ImageCarousel/ImageCarousel';
export interface Product {
    id: string;
    name: string;
    images: string[]; // Измените, чтобы хранить массив изображений
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

    return (
        <div>
            {product ? (
                <>
                    <h1>{product.name}</h1>
                    <ImageCarousel images={product.images} productName={product.name} /> {/* Передаем имя продукта */}
                    <p>{product.description}</p>
                    <h2>Отзывы</h2>
                    <ul>
                        {product.feedback.map((feedback, index) => (
                            <li key={index}>
                                <strong>{feedback.user}:</strong> {feedback.comment} - {'★'.repeat(feedback.rating)}
                            </li>
                        ))}
                    </ul>
                </>
            ) : (
                <p>Загрузка...</p>
            )}
        </div>
    );
};

export default ProductDetail;