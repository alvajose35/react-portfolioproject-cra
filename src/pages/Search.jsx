import { useParams } from "react-router-dom";
import { Col, Row } from 'reactstrap';
import { useState, useEffect } from 'react';
import SearchResultsCard from '../components/SearchResultsCard';

// Combine search term with OMDB API url
const reqCreator = (term) => {
	let request = `http://www.omdbapi.com/?apikey=a6cd0ef5`;
	request = request + "&s=" + term;
	return request;
}

const Search = () => {

	// Get search term from URL
	const { term } = useParams();

	// API fetch state declaration
	const [isLoading, setLoading] = useState(true);
	const [data, setData] = useState(null);
	const [errMsg, setErrMsg] = useState('');

	// Async fetch to OMDB
	useEffect(() => {
		const asyncFetch = async () => {
			try {
				const response = await fetch(reqCreator(term));
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
					<h4>"{term}" Search results:</h4>
					{data.Search.map((movie, idx) => {
						return (
							<Col md='5' className="m-4" key={idx}>
								<SearchResultsCard movie={movie} />
								<div>{movie.Title} {movie.Year}</div>
							</Col>
						)
					})}
				</div>
			)}
		</Row>
	);
};

export default Search;