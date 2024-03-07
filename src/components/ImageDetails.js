// src/components/ImageDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Typography, Card, CardMedia, CardContent } from '@mui/material';

const ImageDetails = () => {
    const { id } = useParams();
    const [imageDetails, setImageDetails] = useState(null);

    useEffect(() => {
        const fetchImageDetails = async () => {
            const response = await axios.get(`https://pixabay.com/api/?key=42745860-855cd442d836ef96a5a3532e1&id=${id}`);
            setImageDetails(response.data.hits[0]);
        };

        fetchImageDetails();
    }, [id]);

    if (!imageDetails) return <Typography>Loading...</Typography>;

    return (
        <Container>
            <Card>
                <CardMedia
                    component="img"
                    image={imageDetails.largeImageURL}
                    alt={imageDetails.tags}
                />
                <CardContent>
                    <Typography variant="h5">Posted by: {imageDetails.user}</Typography>
                    <Typography variant="h6">Tags: {imageDetails.tags}</Typography>
                    <Typography variant="body2">Views: {imageDetails.views}</Typography>
                    <Typography variant="body2">Downloads: {imageDetails.downloads}</Typography>
                    <Typography variant="body2">Likes: {imageDetails.likes}</Typography>
                </CardContent>
            </Card>
        </Container>
    );
};

export default ImageDetails;
