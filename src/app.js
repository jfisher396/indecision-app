class Header extends React.Component {
  render() {
    return <p>This is the header</p>
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    )
  }
}

const jsx = (
  <div>
    <Header />
    <Action />
  </div>
);


ReactDOM.render(jsx, document.getElementById('app'))