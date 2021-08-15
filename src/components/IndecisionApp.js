import React from "react";
import AddOption from "./AddOption";
import Options from "./Options";
import Action from "./Action";
import Header from "./Header";
import OptionModal from "./OptionModal";

export default class IndecisionApp extends React.Component {
	state = {
		options: [],
		selectedOption: undefined,
	};

	handleDeleteOptions = () => {
		this.setState(() => ({ options: [] }));
	};

	handleDeleteOption = (optionToRemove) => {
		this.setState((prevState) => ({
			options: prevState.options.filter((option) => option !== optionToRemove),
		}));
	};

	handlePick = () => {
		const randomNum = Math.floor(Math.random() * this.state.options.length);
		const option = this.state.options[randomNum];
		this.setState({
			selectedOption: option,
		});
	};

	handleAddOption = (option) => {
		if (!option) {
			return "Enter valid value to add item";
		} else if (this.state.options.indexOf(option) > -1) {
			return "This option already exists";
		}

		this.setState((prevState) => ({ options: prevState.options.concat(option) }));
	};

	handleClearSelectedOption = () => {
		this.setState({
			selectedOption: undefined,
		});
	};

	componentDidMount() {
		try {
			const json = localStorage.getItem("options");
			const options = JSON.parse(json);

			if (options) this.setState(() => ({ options }));
		} catch (error) {
			console.log(error);
		}
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.options.length !== this.state.options.length) {
			const json = JSON.stringify(this.state.options);
			localStorage.setItem("options", json);
		}
	}

	render() {
		return (
			<div>
				<Header />
				<div className='container'>
					<Action handlePick={this.handlePick} hasOptions={this.state.options.length > 0} />
					<div className='widget'>
						<Options
							handleDeleteOption={this.handleDeleteOption}
							options={this.state.options}
							handleDeleteOptions={this.handleDeleteOptions}
						/>
						<AddOption handleAddOption={this.handleAddOption} />
					</div>
				</div>
				<OptionModal
					handleClearSelectedOption={this.handleClearSelectedOption}
					selectedOption={this.state.selectedOption}
				/>
			</div>
		);
	}
}
