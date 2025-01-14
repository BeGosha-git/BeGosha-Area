import React from 'react'
//import { Box, Typography } from '@mui/material'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import '../../pages.css';
import './ProductDetail.css';

import fs from 'fs';
import path from 'path';

const DetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const productData = JSON.parse(fs.readFileSync(`../../products/${id}/info.json`, 'utf-8'));
  
    return (
      <div className="product-detail">
        <h1>{productData.name}</h1>
        <img src={require(`../../products/${productData.image}`)} alt={productData.name} />
        <p>{productData.info}</p>
      </div>
    );
}

export default DetailPage;