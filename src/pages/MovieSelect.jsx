import { useState, useEffect } from 'react';

const request = `http://www.omdbapi.com/?apikey=a6cd0ef5&s=a+star+is+born`;

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
                    <h1>A Star is Born Search</h1>
                    {data.Search.map((movie, idx) => (
                        <div key={idx}>{movie.Title} {movie.Year}</div>
                    ))}
                </div>
            )}
        </div>
		</>
	);
};

export default MovieSelect;