import React, {useState, useEffect} from 'react';
import Spinner from './Spinner';
import axios from 'axios';

function Quote() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const getQuote = async () => {
        console.log('searching...');

        const result = await axios(
            'http://loremricksum.com/api/?paragraphs=1&quotes=1',
        );

        console.log('result:', result);
        console.log('result.data.data:', result.data.data);
        setData(result.data);
        setLoading(false);
    };

    useEffect(() => {
        getQuote();
    }, []);

    return loading ? <Spinner /> : <div className="quote">"{data.data}"</div>;
}

export default Quote;
