import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
        <div>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={searchImages}>Search</button>
            <div>
                {images.map((image) => (
                    <Link key={image.id} to={`/image/${image.id}`}>
                        <img
                            src={image.previewURL}
                            alt={image.tags}
                            style={{ margin: 10 }}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default SearchPage;
