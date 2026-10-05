import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchForm = () => {
    const navigate = useNavigate();
    // Inicia com string vazia para evitar 'undefined'
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Evita enviar a busca se o campo estiver vazio ou só com espaços
        if (!query.trim()) return;

        navigate(`/search?q=${encodeURIComponent(query)}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar produto..."
            />
            <input type="submit" value="Buscar" />
        </form>
    );
};

export default SearchForm;