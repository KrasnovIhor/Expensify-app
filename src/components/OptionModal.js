import React from "react";
import Modal from "react-modal";

const OptionModal = (props) => (
	<Modal
		appElement={document.getElementById("app")}
		onRequestClose={props.handleClearSelectedOption}
		isOpen={!!props.selectedOption}
		contentLabel='Selected Option'
		className='modal'
		closeTimeoutMS={200}>
		<h3 className='modal__title'>Selected Option</h3>
		{props.selectedOption && <p className='modal__body'>{props.selectedOption}</p>}
		<button className='button' onClick={props.handleClearSelectedOption}>
			Okay
		</button>
	</Modal>
);

export default OptionModal;
