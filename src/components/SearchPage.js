// src/components/SearchPage.js
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Grid, TextField, Button, Card, CardMedia, Box, Container } from '@mui/material';

const SearchPage = () => {
    const [query, setQuery] = useState('');
    const [images, setImages] = useState([]);

    const searchImages = async () => {
        const response = await axios.get(`https://pixabay.com/api/?key=42745860-855cd442d836ef96a5a3532e1&q=${encodeURIComponent(query)}&image_type=photo`);
        setImages(response.data.hits);
    };

    return (
        <Container>
            <Box display="flex" justifyContent="center" my={2}>
                <TextField
                    label="Search for Images"
                    variant="outlined"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    style={{ marginRight: '10px' }}
                />
                <Button variant="contained" color="primary" onClick={searchImages}>
                    Search
                </Button>
            </Box>
            <Grid container spacing={2}>
                {images.map((image) => (
                    <Grid item xs={12} sm={6} md={4} key={image.id}>
                        <Link to={`/image/${image.id}`} style={{ textDecoration: 'none' }}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    alt={image.tags}
                                    height="140"
                                    image={image.previewURL}
                                />
                            </Card>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default SearchPage;
