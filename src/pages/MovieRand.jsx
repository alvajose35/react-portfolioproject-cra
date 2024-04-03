import MovieCard from "../components/MovieCard";

const MovieRand = ({ movieList }) => {

	const myMovie = movieList[ Math.floor(Math.random() * movieList.length) ];

	return (
		<>
			<h1>Random Page</h1>
			<div>
				<MovieCard movie={myMovie} />
			</div>
		</>
	);
};

export default MovieRand;