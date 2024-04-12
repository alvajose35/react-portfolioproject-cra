import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, FormGroup, Label, Button } from 'reactstrap';
import MovieSelect from '../pages/MovieSelect';

const SearchModal = () => {

	// State declaration
	const [searchModalOpen, setSearchModalOpen] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);
	const inputEl = useRef();

	const navigate = useNavigate();

	// Modal Form submit button handler
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(e.target);
		console.log("submitted value:", inputEl.current.value);
		// inputEl.current.value = "";

		setSearchModalOpen(false);
		setIsSubmitted(true);

		// window.location.href = "/search/"+ inputEl.current.value;

		// this.props.history.push('/movies')

		navigate("/search/"+ inputEl.current.value);

		// return (
		// 	<MovieSelect/>
		// )
	};

	return (
		<>
			<Button outline onClick={() => setSearchModalOpen(true)}>
				Search
			</Button>


			<Modal isOpen={searchModalOpen}>
				<ModalHeader toggle={() => setSearchModalOpen(false)}>Search Movies</ModalHeader>
				<ModalBody>
					{/* <form action={"/select"} onSubmit={handleSubmit}> */}
					<form onSubmit={handleSubmit}>
						<input ref={inputEl} />
						<button type="submit">Search</button>
					</form>
				</ModalBody>
			</Modal>

			{isSubmitted && <MovieSelect/> }
		</>
	);
};

export default SearchModal;