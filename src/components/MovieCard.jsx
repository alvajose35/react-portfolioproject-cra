const MovieCard = ({ movie }) => {
	return (
		<div className="bg-primary border p-4 m-2">
			<img src={movie.Poster} alt={movie.Title}/>
			<h3>{movie.Title}</h3>
			<p>{movie.Year}</p>
			<p>{movie.Ratings[0].Value}</p>
		</div>
	);
};

export default MovieCard;