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

  handleRemoveAll() {
    alert("handleRemoveAll")
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
  render() {
    return (
      <div>
        <h1>Add Option div</h1>
      </div>
    )
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))