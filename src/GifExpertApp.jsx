import { useState } from 'react';
import { AddCategory } from './componentes/AddCategory';
import { GifGrid } from './GifGrid';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['dragon ball', 'valorant', 'One punch']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    };

    return (
        <>
            <h1>App de gifs</h1>

            <AddCategory onAddCategory={onAddCategory} />

            {categories.map(category => (
                <GifGrid 
                    key={category} 
                    category={category} 
                />
            ))}
        </>
    );
};
export  default GifExpertApp;