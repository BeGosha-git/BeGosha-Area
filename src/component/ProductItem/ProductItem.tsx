import React from 'react';
import './ProductItem.css';

interface Product {
    id: string;
    name: string;
    image: string;
    info: string;
}

interface ProductItemProps {
    product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
    return (
        <div className="product-item">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <a href={`products/${product.info}`}>Подробнее</a>
        </div>
    );
}

export default ProductItem;