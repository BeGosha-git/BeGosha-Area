import React from 'react';
import { Container, Typography, List, ListItem, Paper } from '@mui/material';
import '../pages.css'

const AboutUs: React.FC = () => {
    return (
        <div className='PageForm'>
            <Container sx={{
                bgcolor: '#060606',
                padding: 4,
                borderRadius: '5px',
                boxShadow: 3,
                marginTop: '4vh',
                marginBottom: '6vh',
            }}>
                <Typography variant="h1" align="center" sx={{
                    color: '#FEFEFE',
                    marginBottom: 2,
                    fontWeight: 'bold',
                    fontFamily: "monospace",
                    letterSpacing: ".3rem",
                }}>
                    About Area
                </Typography>
                <Typography variant="h6" align="center" sx={{
                    color: '#FDFDFD',
                    marginBottom: 4,
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".2rem",
                }}>
                    Pet проект, созданный для курсовых...
                </Typography>
                <Typography variant="h4" sx={{
                    marginTop: 2,
                    marginBottom: 2,
                    color: '#FEFEFE',
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".2rem",
                }}>
                    Задача Area
                </Typography>
                <Typography variant="body1" sx={{
                    marginBottom: 4,
                    color: '#FDFDFD',
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".1rem",
                }}>
                    Задача Area – проверить, что работает.
                </Typography>

                <Typography variant="h4" sx={{
                    marginTop: 2,
                    marginBottom: 2,
                    color: '#FEFEFE',
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".2rem",
                    fontSize: '17px',
                }}>
                    Ценность Area
                </Typography>
                <Paper sx={{
                    padding: 2,
                    borderRadius: '5px',
                    bgcolor: '#0A0A0A',
                    boxShadow: 2,
                    color: '#FDFDFD',
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".1rem",
                    fontSize: '17px',
                }}>
                    <List>
                        <ListItem>Интерфейс</ListItem>
                        <ListItem>Работает</ListItem>
                        <ListItem>Типо инновации</ListItem>
                    </List>
                </Paper>
            </Container>
        </div>
    );
};

export default AboutUs;