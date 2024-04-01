import { Link } from "react-router-dom";
import { Container } from "reactstrap";

const HomePage = () => {
	return (
		<Container>
			<h1>HomePage</h1>
			<Link to='/movies'>
				<p>MOVIES LIST</p>
			</Link>
			<Link to='/random'>
				<p>RANDOM MOVIE</p>
			</Link>
			<Link to='/select'>
				<p>ADD/SEARCH MOVIE</p>
			</Link>
		</Container>
	);
};

export default HomePage;