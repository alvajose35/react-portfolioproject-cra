import styles from "../styles/Header.module.css";
import Logo from "../data/pics/logo2.png";
import { Link } from "react-router-dom";

const Header = () => {
	return(
		<div className={styles.main}>
			<Link to='/'>
				<img src={Logo} alt="site logo" className={styles.logo}/>
			</Link>
			<h1>My Favorite Movies</h1>
			{/* <div>Header</div> */}
		</div>
	);
};

export default Header;