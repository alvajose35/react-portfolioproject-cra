import { Col, Row } from "reactstrap";
import MovieCard from "../components/MovieCard";
// import { moviesDB } from "../data/moviesArr";

const MovieList = ({ movieList }) => {
	return (
		<Row className="ms-auto">
			<div>Movie list</div>
			{ movieList.map((movie) => {
				return (
					<Col md='5' className="m-4" key={movie.imdbID}>
						<MovieCard movie={movie} key={movie.imdbID}/>
					</Col>
				)
			})}
		</Row>
	);
};

export default MovieList;