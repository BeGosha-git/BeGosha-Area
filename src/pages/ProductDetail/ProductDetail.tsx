import React, { useEffect, useState } from 'react'
//import { Box, Typography } from '@mui/material'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import '../../pages.css';
import './ProductDetail.css';

const DetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [productData, setProductData] = useState<any>(null);

    useEffect(() => {
        const fetchProductData = async () => {
            const response = await fetch(`../../../public/products/${id}/info.json`);
            const data = await response.json();
            setProductData(data);
        };

        fetchProductData();
    }, [id]);

    if (!productData) {
        return <div>Loading...</div>;
    }

    return (
      <div className="product-detail">
        <h1>{productData.name}</h1>
        <img src={require(`../../../public/products/${productData.image}`)} alt={productData.name} />
        <p>{productData.info}</p>
      </div>
    );
}

export default DetailPage;