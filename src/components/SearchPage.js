import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./SearchPage.css";

const SearchPage = () => {
    const [query, setQuery] = useState("");
    const [images, setImages] = useState([]);

    const searchImages = async () => {
        const response = await axios.get(
            `https://pixabay.com/api/?key=42745860-855cd442d836ef96a5a3532e1&q=${encodeURIComponent(
                query
            )}&image_type=photo`
        );
        setImages(response.data.hits);
    };

    return (
        <div className={styles.searchContainer}>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className={styles.searchInput}
            />
            <button onClick={searchImages} className={styles.searchButton}>Search</button>
            <div className={styles.imagesContainer}>
                {images.map((image) => (
                    <Link key={image.id} to={`/image/${image.id}`} className={styles.imageLink}>
                        <img
                            src={image.previewURL}
                            alt={image.tags}
                            style={{ margin: 10 }}
                            className={styles.image}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default SearchPage;
