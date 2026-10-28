import { useState } from 'react';

export const AddCategory = ({ onAddCategory }) => {
    const [inputValue, setInputValue] = useState('');

    const onSubmit = (event) => {
        event.preventDefault(); 
        
        if (inputValue.trim().length > 1) {
            onAddCategory(inputValue.trim());
            setInputValue(''); 
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
            />
        </form>
    );
};

export default AddCategory;