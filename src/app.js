console.log("App.js is running!");

const appInfo = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer",
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();
//gets the value from the input named "option"
  const option = e.target.elements.option.value;
//checks for a value in the input named "option" before pushing that value onto the options array.
  if (option) {
    appInfo.options.push(option);
    //clears out the input of the form
    e.target.elements.option.value = "";
    render();
  }
};

const appRoot = document.getElementById("app");

const render = () => {
  const template = (
    <div>
      <h1>{appInfo.title}</h1>
      {appInfo.subtitle && <p>{appInfo.subtitle}</p>}
      <p>{appInfo.options.length > 0 ? "Here are your options" : "No options"}</p>
      <p>{appInfo.options.length}</p>
      {/* <button onClick={}>Remove All</button> */}
      <ol>
        <li>Item one</li>
        <li>Item two</li>
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

render();
