import { useParams } from "react-router-dom";
import { moviesDB } from "../data/moviesArr";
import { Col, Container, Row } from "reactstrap";

const MovieDetail = () => {
	const { id } = useParams();

	const myMovie = moviesDB.find((movie) => movie.imdbID === id);

	console.log(myMovie);

	return (
		<Container>
			<div>MovieDetail</div>
			<Row className="bg-secondary border p-4 m-2">
				<Col md='5' className="m-1">
					<img src={myMovie.Poster} alt={myMovie.Title} />
				</Col>
				<Col md='5' className="m-1">
					<h3>{myMovie.Title}</h3>
					<p>Year: {myMovie.Year}</p>
					<p>Rated: {myMovie.Rated}</p>
					<p>Released: {myMovie.Released}</p>
					<p>Runtime: {myMovie.Runtime}</p>
					<p>Genre: {myMovie.Genre}</p>
					<p>Director: {myMovie.Director}</p>
					<p>Starring: {myMovie.Actors}</p>
					<p>Ratings: {myMovie.Ratings[0].Value} || {myMovie.Ratings[1].Value} || {myMovie.Ratings[2].Value}</p>
					<p>{myMovie.Plot}</p>
				</Col>
			</Row>
		</Container>
	);
};

export default MovieDetail;