import MovieCard from "../components/MovieCard";
import { moviesDB } from "../data/moviesArr";

const MovieList = () => {
	return (
		<>
			{ moviesDB.map(movie => (
				<MovieCard movie={movie} key={movie.imdbID}/>
			))}
		</>
	);
};

export default MovieList;