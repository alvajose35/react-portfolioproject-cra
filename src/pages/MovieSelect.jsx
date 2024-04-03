import { Col, Row } from 'reactstrap';
import { useState, useEffect } from 'react';
import SearchResultsCard from '../components/SearchResultsCard';


const request = `http://www.omdbapi.com/?apikey=a6cd0ef5&s=a+star+is+born`;

const MovieSelect = () => {

    // API fetch state declaration
	const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [errMsg, setErrMsg] = useState('');

    // Async fetch to OMDB
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

    // Render non-nominal responce state
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
		<Row className="ms-auto">
			<h1>Search Results</h1>
            {data && (
                <div>
                    <h2>A Star is Born Search</h2>
                    { data.Search.map((movie, idx) => {
                        return(
                            <Col md='5' className="m-4" key={idx}>
                                <SearchResultsCard movie={movie} key={idx}/>
                                <div key={idx}>{movie.Title} {movie.Year}</div>
                            </Col>    
                        )
                    })}
                </div>
            )}
		</Row>
	);
};

export default MovieSelect;