// import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/Home";
import MovieList from "./pages/MovieList";
import MovieRand from "./pages/MovieRand";
import MovieDetail from "./pages/MovieDetail";
import { moviesDB } from "./data/moviesArr";
import { useState } from "react";

function App() {
	const [movieList, setMovieList] = useState( moviesDB );

	return (
		<>
			<Header/>
			<Routes>			
				<Route path="/" element={<HomePage/>} />
				<Route path="/movies" element={<MovieList movieList={movieList}/>} />
				<Route path="/movies/:id" element={<MovieDetail/>} />
				<Route path="/random" element={<MovieRand movieList={movieList}/>} />
			</Routes>
		</>
	);
};

export default App;