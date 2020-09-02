import { useState, useEffect } from 'react';

const UseAsyncRequest = amount => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch(`https://randomuser.me/api/?results=${amount}`);
                const data = await response.json();
                setData(data.results, setLoading(true));
            } catch (e) {
                console.log('API Problem', e);
                setLoading(false);
            }
        }
        if (amount) {
            fetchData(amount);
        }
    }, [amount]);

    return [data, loading];
};

export default UseAsyncRequest;