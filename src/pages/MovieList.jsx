import MovieCard from "../components/MovieCard";
import { moviesDB } from "../data/moviesArr";

const MovieList = () => {
	return (
		<>
			<div>Movie list</div>
			{ moviesDB.map(movie => (
				<MovieCard movie={movie} key={movie.imdbID}/>
			))}
		</>
	);
};

export default MovieList;