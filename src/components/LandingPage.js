import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from './LandingPage.css';

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
        <div className={styles.container}>
            <h1>Welcome to the Pixabay Image Search</h1>
            <p>Find beautiful images and photos from Pixabay.</p>
            <Link to="/search">Start Searching</Link>
            <div className={styles.imagesContainer}>
                {editorsChoiceImages.map((image) => (
                    <Link key={image.id} to={`/image/${image.id}`} className={styles.imageLink}>
                        <img src={image.previewURL} alt={image.tags} className={styles.image} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default LandingPage;

