//<img src={require(`../../products/${id}/${product.image}`)} alt={product.name} />

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../../products/products.json'


interface Feedback {
    user: string;
    comment: string;
    rating: number;
  }
  
  interface Product {
    id: string;
    name: string;
    image: string;
    description: string;
    feedback: Feedback[];
  }
  
  const ProductDetail: React.FC = () => {
    const { productName } = useParams<{ productName: string }>();
    const [product, setProduct] = useState<Product | null>(null);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      console.log("productName из URL:", productName);
      const foundProduct = productsData.find((p: Product) => p.name === productName);
      if (foundProduct) {
        setProduct(foundProduct);
      } else {
        setError('Продукт не найден');
      }
    }, [productName]);
  
    if (error) {    
      return <div>Произошла ошибка: {error}</div>;
    }
  
    if (!product) {
      return <div>Загрузка...</div>;
    }
  
    return (
      <div>
        <h1>{product.name}</h1>
        <img src={require(`../../products/${product.name}/${product.image}`)} alt={product.name} />
        <p>{product.description}</p>
        <h3>Отзывы:</h3>
        <ul>
          {product.feedback.map((fb, index) => (
            <li key={index}>
              <strong>{fb.user}</strong>: {fb.comment} <em>({fb.rating} звёзд)</em>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default ProductDetail;