import React, {useState} from 'react';
import {Link} from '@reach/router';
import Spinner from './Spinner';
import useSearchRickAPI from './useSearchRickAPI';
import './App.css';

function Search() {
    const [query, setQuery] = useState('');
    const [search, setSearch] = useState('');
    const [data, loading] = useSearchRickAPI(search);

    const handleSubmit = e => {
        e.preventDefault();
        setSearch(query);
    };

    return loading ? (
        <Spinner />
    ) : (
        <div className="results-wrapper">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="rick, morty, jerry, etc"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
            <div className="results">
                <ul>
                    {data.results.map(item => (
                        <li key={item.id}>
                            <Link to={`/details/${item.id}`}>
                                <img alt={item.name} src={item.image} />
                                <span className="name"> {item.name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Search;
