class IndecisionApp extends React.Component {
  render() {

    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';
    const options = [ "one", "two", "three" ]

    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action />
        <Options options={options}/>
        <AddOption />
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    )
  }
}

class Action extends React.Component {

  handlePick() {
    alert("handlePick")
  }

  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What should I do?</button>
      </div>
    )
  }
}

class Options extends React.Component {

  constructor(props) {
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }

  handleRemoveAll() {
    alert("handleRemoveAll");
    console.log(this.props.options)
  }

  render() {
    return (
      <div>
        {this.props.options.map(item => <Option key={item} optionText={item} />)}
        <button onClick={this.handleRemoveAll}>Remove All</button>
      </div>
    )
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        {this.props.optionText}
      </div>
    )
  }
}

class AddOption extends React.Component {

  handleAddOption(e) {
    e.preventDefault();
    //gets the value from the input named "option"
    const option = e.target.elements.option.value.trim();
    //checks for a value in the input named "option" before pushing that value onto the options array.
    if (option) {
      alert("option added");
    // appInfo.options.push(option);
    //clears out the input of the form
    e.target.elements.option.value = "";
  }
}

  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))