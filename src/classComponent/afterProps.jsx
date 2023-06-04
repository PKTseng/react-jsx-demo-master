import React from 'react'

function SonF(props) {
  console.log(props)

  return <h2>Function {props.message}</h2>
}

class SonC extends React.Component {
  render() {
    return <h2>Son {this.props.message}</h2>
  }
}

class App extends React.Component {
  state = {
    message: 'this is message',
  }

  render() {
    return (
      <>
        <SonF message={this.state.message} />
        <SonC message={this.state.message} />
      </>
    )
  }
}

export default App
