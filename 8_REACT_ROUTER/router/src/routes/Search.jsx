import React from 'react';
import { useFetch } from '../hooks/useFetch'; // Atente-se ao 'u' minúsculo do arquivo
import { Link, useSearchParams } from 'react-router-dom';

const Search = () => {
    // 1. Primeiro declara o hook
    const [searchParams] = useSearchParams();

    // 2. Transforma o objeto searchParams em string válida (.toString())
    const url = "http://localhost:3000/products?" + searchParams.toString();

    const { data: itens, loading, error } = useFetch(url);

    if (loading) return <p>Carregando resultados...</p>;
    if (error) return <p>Erro ao carregar busca: {error}</p>;

    return (
        <div>
            <h1>Resultados da pesquisa</h1>
            <ul className="products">
                {itens && itens.map(item => (
                    <li key={item.id}>
                        <h2>{item.name}</h2>
                        <p>{item.price}</p>
                        <Link to={`/products/${item.id}`}>Detalhes</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Search;