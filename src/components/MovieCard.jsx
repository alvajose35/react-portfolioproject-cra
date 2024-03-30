import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
	return (
		<Link to={`${movie.imdbID}`}>
			<div className="bg-secondary border p-4 m-2">
				<img src={movie.Poster} alt={movie.Title}/>
				<h3>{movie.Title}</h3>
				<p>{movie.Year}</p>
				<p>{movie.Ratings[0].Value}</p>
			</div>
		</Link>
	);
};

export default MovieCard;