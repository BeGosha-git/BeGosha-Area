import React from 'react'
import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import '../pages.css';
const ProfilePage = () => {
  return (
    <Box className="ProfilePage">
        
    <Box className="page-not-found__animation-container">
        <Box className="page-not-found__illustration"></Box>
    </Box>
    <Typography className="page-not-found__message" component="p">
        LandingPage
    </Typography>
    <Link to="/" className="page-not-found__link">
        Return to Home
    </Link>
    </Box>
  )
}  

export default ProfilePage  
