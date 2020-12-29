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

//clears out all items in the options array upon button click
const onClearArr = () => {
  appInfo.options = [];
  render()
};

//randomly chooses between items in the options array
const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * appInfo.options.length);
  const option = appInfo.options[randomNum];
  alert(option);
};

const appRoot = document.getElementById("app");

const render = () => {
  const template = (
    <div>
      <h1>{appInfo.title}</h1>
      {appInfo.subtitle && <p>{appInfo.subtitle}</p>}
      <p>
        {appInfo.options.length > 0 ? "Here are your options" : "No options"}
      </p>
      {/* hides choice button if there are no items in the options array */}
      <button disabled={appInfo.options.length===0} onClick={onMakeDecision}>What should I do?</button>
      <button onClick={onClearArr}>Remove All</button>
      <ol>
        {appInfo.options.map(item => <li key={item}>{item}</li>)}
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
