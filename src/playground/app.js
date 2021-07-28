class IndecisionApp extends React.Component {
	constructor(props) {
		super(props);

		this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
		this.handlePick = this.handlePick.bind(this);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.handleDeleteOption = this.handleDeleteOption.bind(this);

		this.state = {
			options: [],
		};
	}

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

	componentWillUnmount() {
		console.log("componentWillUnmount");
	}

	handleDeleteOptions() {
		this.setState(() => ({ options: [] }));
	}

	handleDeleteOption(optionToRemove) {
		this.setState((prevState) => ({
			options: prevState.options.filter((option) => option !== optionToRemove),
		}));
	}

	handlePick() {
		const randomNum = Math.floor(Math.random() * this.state.options.length);
		const option = this.state.options[randomNum];
		alert(option);
	}

	handleAddOption(option) {
		if (!option) {
			return "Enter valid value to add item";
		} else if (this.state.options.indexOf(option) > -1) {
			return "This option already exists";
		}

		this.setState((prevState) => ({ options: prevState.options.concat(option) }));
	}
	render() {
		return (
			<div>
				<Header />
				<Action handlePick={this.handlePick} hasOptions={this.state.options.length > 0} />
				<Options
					handleDeleteOption={this.handleDeleteOption}
					options={this.state.options}
					handleDeleteOptions={this.handleDeleteOptions}
				/>
				<AddOption handleAddOption={this.handleAddOption} />
			</div>
		);
	}
}

const Header = (props) => {
	return (
		<div>
			<h1>{props.title}</h1>
			{props.subtitle && <h2>{props.subtitle}</h2>}
		</div>
	);
};

Header.defaultProps = {
	title: "Indecision",
	subtitle: "Put your life in a hands of a computer",
};

const Action = (props) => {
	return (
		<div>
			<button onClick={props.handlePick} disabled={!props.hasOptions}>
				What should I do?
			</button>
		</div>
	);
};

const Options = (props) => {
	return (
		<div>
			<p>{props.options.length}</p>
			<button onClick={props.handleDeleteOptions}>Remove All</button>
			{props.options.length === 0 && <p>Please add an Option to get started</p>}
			<ol>
				{props.options.map((option, i) => (
					<Option handleDeleteOption={props.handleDeleteOption} key={i} option={option} />
				))}
			</ol>
		</div>
	);
};

const Option = (props) => {
	return (
		<div>
			<li>{props.option}</li>
			<button onClick={() => props.handleDeleteOption(props.option)}>Remove</button>
		</div>
	);
};


ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
