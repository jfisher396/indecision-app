class VisibilityApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false,
    };
  }

  handleToggleVisibility() {
    // console.log(this.state);
    if (!this.state.visibility) {
      this.setState(() => {
        return {
          visibility: true,
        };
      });
    } else {
      this.setState(() => {
        return {
          visibility: false,
        };
      });
    }
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visibility ? "Hide details" : "Show details"}
        </button>
        {this.state.visibility && (
          <div>
            <p>Hey. These are some details you can now see.</p>
          </div>
        )}
      </div>
    );
  }
}


ReactDOM.render(<VisibilityApp />, document.getElementById('app'))