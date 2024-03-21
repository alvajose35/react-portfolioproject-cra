import styles from "../styles/Header.module.css";
import Logo from "../data/pics/logo2.png";

const Header = () => {
	return(
		<div className={styles.main}>
			<img src={Logo} alt="site logo" className={styles.logo}/>
			<h1>My Favorite Movies</h1>
			{/* <div>Header</div> */}
		</div>
	);
};

export default Header;