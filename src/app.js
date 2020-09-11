console.log("App.js is running!");

const appInfo = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer",
  options: ["One", "Two"]
};


const template = (
  <div>
    <h1>{appInfo.title}</h1>
    {appInfo.subtitle && <p>{appInfo.subtitle}</p>}
    <p>{appInfo.options.length > 0 ? "Here are your options" : "No options"}</p>
    <ol>
        <li>Item one</li>
        <li>Item two</li>
    </ol>
  </div>
);

let count = 0;
const addOne = () => {
  console.log('addOne');
};
const minusOne = () => {
  console.log('minusOne');
};
const reset = () => {
  console.log('reset');
};
const templateTwo = (
  <div>
    <h1>Count: {count}</h1>
    <button onClick={addOne}>+1</button>
    <button onClick={minusOne}>-1</button>
    <button onClick={reset}>Reset</button>
  </div>
)

const appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
