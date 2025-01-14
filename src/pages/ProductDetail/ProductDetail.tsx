import React from 'react'
import { Box, Typography } from '@mui/material'
//import { Link } from 'react-router-dom'
import '../../pages.css';
import './ProductDetail.css';

const ProductDetail = () => {
  return (
    <div className='PageForm'>
      <Box className="PageForm">
          
      <Box className="page-not-found__animation-container">
          <Box className="page-not-found__illustration"></Box>
      </Box>
      <Typography className="page-not-found__message" component="p">
          LandingPage
      </Typography>
      <a href="/" className="page-not-found__link">
          Return to Home
      </a>
      </Box>
    </div>
  )
}  

export default ProductDetail  
