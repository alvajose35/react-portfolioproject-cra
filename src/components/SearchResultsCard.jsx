// import { Link } from "react-router-dom";

const SearchResultsCard = ({ movie }) => {
	return (
		// <Link to={`/movies/${movie.imdbID}`}>
			<div className="bg-secondary border p-4 m-2">
				<img src={movie.Poster} alt={movie.Title}/>
				<h3>{movie.Title}</h3>
				<p>{movie.Year}</p>
			</div>
		// </Link>
	);
};

export default SearchResultsCard;