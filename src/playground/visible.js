class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.title = "Visibility Toggle";
    this.details = "Some details";
    this.state = {
      detailsVisible: false,
    };
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
  }

  handleToggleVisibility() {
    this.setState((prevState) => ({ detailsVisible: !prevState.detailsVisible }));
  }

  render() {
    return (
      <div>
        <h1>{this.title}</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.detailsVisible ? "Hide details" : "Show details"}
        </button>
        {this.details && (
          <p style={this.state.detailsVisible ? { display: "block" } : { display: "none" }}>{this.details}</p>
        )}
        {this.subtitle && <p>{this.subtitle}</p>}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));
