import React from 'react'

function SonF(props) {
  console.log(props)

  return <h2>Function {props.message}</h2>
}

class SonC extends React.Component {
  render() {
    return (
      <>
        {/* <h2>Son {this.props.message}</h2> */}
        <div>Son List {this.props.list}</div>
      </>
    )
  }
}

class App extends React.Component {
  state = {
    // message: 'this is message',
    list: [1, 2, 3],
  }

  render() {
    return (
      <>
        {/* <SonF message={this.state.message} /> */}
        <SonC list={this.state.list} />
      </>
    )
  }
}

export default App
