const app = {
  title: "Indecision App",
  subtitle: "Hello man!",
  options: [],
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};

const removeOptions = () => {
  app.options = [];
  renderApp();
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    renderApp();
  }
};

const appRoot = document.getElementById("app");

const renderApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>
        {app.options && app.options.length > 0
          ? `Here are your options: ${app.options.join(", ")}`
          : "No Options =("}
      </p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>
        What should I do?
      </button>
      <button onClick={removeOptions}>Remove All</button>
      <ol>{app.options && app.options.map((option, i) => <li key={i}>{option}</li>)}</ol>

      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

renderApp();

// ReactDOM.render(template, appRoot);
