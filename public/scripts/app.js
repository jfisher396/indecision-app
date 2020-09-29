"use strict";

console.log("App.js is running!");

var appInfo = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer",
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  //gets the value from the input named "option"
  var option = e.target.elements.option.value;
  //checks for a value in the input named "option" before pushing that value onto the options array.
  if (option) {
    appInfo.options.push(option);
    //clears out the input of the form
    e.target.elements.option.value = "";
    render();
  }
};

var clearArr = function clearArr() {
  appInfo.options = [];
  render();
};

var appRoot = document.getElementById("app");

var render = function render() {
  var template = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      appInfo.title
    ),
    appInfo.subtitle && React.createElement(
      "p",
      null,
      appInfo.subtitle
    ),
    React.createElement(
      "p",
      null,
      appInfo.options.length > 0 ? "Here are your options" : "No options"
    ),
    React.createElement(
      "p",
      null,
      appInfo.options.length
    ),
    React.createElement(
      "button",
      { onClick: clearArr },
      "Remove All"
    ),
    React.createElement(
      "ol",
      null,
      appInfo.options.map(function (item) {
        return React.createElement(
          "li",
          { key: item },
          item
        );
      })
    ),
    React.createElement(
      "form",
      { onSubmit: onFormSubmit },
      React.createElement("input", { type: "text", name: "option" }),
      React.createElement(
        "button",
        null,
        "Add Option"
      )
    )
  );
  ReactDOM.render(template, appRoot);
};

render();
