import { useState, useEffect } from 'react';

const request = `https://pokeapi.co/api/v2/pokemon?limit=151`;

const MovieSelect = () => {

	const [isLoading, setLoading] = useState(true); // pending
    const [data, setData] = useState(null); // fulfilled
    const [errMsg, setErrMsg] = useState(''); // rejected

	useEffect(() => {
        const asyncFetch = async () => {
            try {
                const response = await fetch(request);
                if (!response.ok) {
                    throw new Error(response.status);
                }
                const fetchedData = await response.json();
                setTimeout(() => {
                    setLoading(false);
                    setData(fetchedData);
                    setErrMsg('');
                }, 3000);
            } catch (err) {
                setLoading(false);
                setErrMsg(err.toString());
            }
        };
        asyncFetch();
    }, []);

	if (isLoading) {
        return <h1>loading...</h1>;
    }
    if (errMsg) {
        return (
            <div>
                <h1>whoopsie!: that was a bad request</h1>
                <p>{errMsg}</p>
            </div>
        );
    }

	return (
		<>
			<h1>Select Page Async</h1>
			<div>
            {data && (
                <div>
                    <h1>top 10 poke</h1>
                    {data.results.map((item, idx) => (
                        <div key={idx}>{item.name}</div>
                    ))}
                </div>
            )}
        </div>
		</>
	);
};

export default MovieSelect;