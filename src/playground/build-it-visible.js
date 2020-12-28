const appRoot = document.getElementById("app");

let visibility = false;

const onButtonClick = () => {
    visibility = !visibility;
    render();

}


const render = () => {
    const template = (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={onButtonClick}>
          {visibility ? "Hide details" : "Show details"}
        </button>
        {visibility && (
            <div>
                <p>Hey. These are some details you can now see.</p>
            </div>
        )}
      </div>
    );
    ReactDOM.render(template, appRoot);
}

render()