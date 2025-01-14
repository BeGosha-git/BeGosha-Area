import React from 'react';
import { Link } from 'react-router-dom'
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
            <img src={require(`../../products/${product.name}/image1.jpg`)} alt={product.name} />
            <h2>{product.name}</h2>
            <Link to={`/products/${product.id}`}>Подробнее</Link>
        </div>
    );
}

export default ProductItem;