import { useState, useEffect } from 'react';

const request = `https://pokeapi.co/api/v2/pokemon?limit=10`;

const MovieSelect = () => {

	const [isLoading, setLoading] = useState(true); // pending
    const [data, setData] = useState(null); // fulfilled
    const [errMsg, setErrMsg] = useState(''); // rejected

	useEffect(() => {
        fetch(request)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.status);
                }
                return response;
            })
            .then((response) => response.json())
            .then((fetchedData) => {
                setTimeout(() => {
                    setLoading(false);
                    setData(fetchedData);
                    setErrMsg('');
                }, 3000);
            })
            .catch((err) => {
                setLoading(false);
                setErrMsg(err.toString());
            });
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
			<h1>Select Page Then</h1>
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