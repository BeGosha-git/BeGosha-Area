import React from 'react'
//import { Box, Typography } from '@mui/material'
import { useParams } from 'react-router-dom';
//import { Link } from 'react-router-dom'
import '../../pages.css';
import './ProductDetail.css';

const InfoPage: React.FC = () => {
    const { infoId } = useParams<{ infoId: string }>(); // Получаем параметр из URL
    return (
        <div>
            <h1>Информация о продукте</h1>
            <h2>Страница для продукта {infoId}</h2>
            {/* Здесь вы можете добавить содержимое, которое хотите отобразить для данного продукта */}
        </div>
    );
}

export default InfoPage;