const SearchResultsCard = ({ movie }) => {

	console.log(movie);

	return (
		<div className="bg-success border p-4 m-2">
			<img src={movie.Poster} alt={movie.Title}/>
			<h3>{movie.Title}</h3>
			<p>{movie.Year}</p>
			<button>Add to List</button>
		</div>
	);
};

export default SearchResultsCard;