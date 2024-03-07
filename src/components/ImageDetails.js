import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

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

    if (!imageDetails) return <div>Loading...</div>;

    return (
        <div>
            <img src={imageDetails.largeImageURL} alt={imageDetails.tags} />
            <p>{imageDetails.tags}</p>
            <p>Views: {imageDetails.views}</p>
            <p>Downloads: {imageDetails.downloads}</p>
            <p>Likes: {imageDetails.likes}</p>
        </div>
    );
};

export default ImageDetails;
