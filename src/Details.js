import React, {useState, useEffect} from 'react';
import Spinner from './Spinner';
import axios from 'axios';

function Details(route) {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    const getCharacter = async () => {
        console.log('searching...');
        console.log('route:', route);

        const result = await axios(
            `https://rickandmortyapi.com/api/character/${route.id}`
        );

        console.log('result:', result);
        setData(result.data);
        setLoading(false);
    };

    useEffect(() => {
        getCharacter();
    }, []);

    return loading ? (
        <Spinner />
    ) : (
        <div className="details">
            <img alt={data.image} src={data.image} />
            <h1>{data.name}</h1>
            <div className="species">
                {data.species} <span className="status">({data.status})</span>
            </div>
            <div className="location">
                <i class="fas fa-map-marker" /> {data.location.name}
            </div>
        </div>
    );
}

export default Details;
