// src/components/LandingPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Container, Typography, Grid, Card, CardActionArea, CardMedia } from '@mui/material';

const LandingPage = () => {
    const [editorsChoiceImages, setEditorsChoiceImages] = useState([]);

    useEffect(() => {
        const fetchEditorsChoiceImages = async () => {
            try {
                const response = await axios.get(`https://pixabay.com/api/?key=42745860-855cd442d836ef96a5a3532e1&editors_choice=true&per_page=50&image_type=photo`);
                setEditorsChoiceImages(response.data.hits);
            } catch (error) {
                console.error("Error fetching editor's choice images:", error);
            }
        };

        fetchEditorsChoiceImages();
    }, []);

    return (
        <Container>
            <Typography variant="h4" component="h1" gutterBottom align="center">
                Welcome to the Pixabay Image Search
            </Typography>
            <Typography variant="h6" component="p" gutterBottom align="center">
                Find beautiful images and photos from Pixabay.
            </Typography>
            <Typography variant="body1" align="center" paragraph>
                <Link to="/search" style={{ textDecoration: 'none', color: 'inherit' }}>Start Searching</Link>
            </Typography>
            <Grid container spacing={3} justifyContent="center">
                {editorsChoiceImages.map((image) => (
                    <Grid item xs={12} sm={6} md={4} key={image.id}>
                        <Link to={`/image/${image.id}`} style={{ textDecoration: 'none' }}>
                            <Card>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt={image.tags}
                                        height="140"
                                        image={image.previewURL}
                                    />
                                </CardActionArea>
                            </Card>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default LandingPage;
