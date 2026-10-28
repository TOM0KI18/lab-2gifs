import { useEffect, useState } from 'react';
import { GifCard } from './GifCard';
import { getGifs } from './helpers/getGifs';

export const GifGrid = ({ category }) => {
    const [images, setImages] = useState([]);

    useEffect(() => {   
        getGifs(category).then(newImages => setImages(newImages));
    }, [category]); 

    return (
        <>
            <h3>{category}</h3>
            <div className="card-grid">
                {
                    images.map(image => (
                        <GifCard 
                            key={image.id} 
                            {...image} 
                        />
                    ))
                }
            </div>
        </>
    );
};

export default GifGrid;