import React from 'react';
import Spinner from './Spinner';
import useSearchRickAPI from './useSearchRickAPI';

function Details(route) {
    const [data, loading] = useSearchRickAPI(route.id);

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
                <i className="fas fa-map-marker" /> {data.location.name}
            </div>
        </div>
    );
}

export default Details;
