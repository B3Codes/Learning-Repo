import { useEffect, useState } from 'react';

const useFetch = (url, page) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchArticles = async () => {
            setLoading(true);
            try {
                const response = await fetch(`${url}&page=${page}`);
                const json = await response.json();
                setData((prevData) => [...prevData, ...json.articles]);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchArticles();
    }, [url, page]);

    return { data, loading, error };
};

export default useFetch;
