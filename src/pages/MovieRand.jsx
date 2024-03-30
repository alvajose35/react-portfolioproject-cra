import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";

const MovieRand = ({ movieList }) => {

	const myMovie = movieList[ Math.floor(Math.random() * movieList.length) ];

	return (
		<>
			<h1>Random Page</h1>
			<Link to={`/movies/${myMovie.imdbID}`}>
				<div>
				<MovieCard movie={myMovie} />
				</div>
			</Link>
		</>
	);
};

export default MovieRand;