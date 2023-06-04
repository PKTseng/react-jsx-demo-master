import React from 'react'

function SonFunctionA({ getMsg }) {
  return (
    <>
      <button onClick={() => getMsg('test')}>getMsg </button>
    </>
  )
}

function SonFunctionB({ sonStatus }) {
  return (
    <>
      <h2>SonFunctionB {sonStatus}</h2>
    </>
  )
}

class SonClass extends React.Component {
  render() {
    return (
      <>
        <h2>Son {this.props.message}</h2>

        <div>
          list
          {this.props.list.map((i) => (
            <p key={i}>{i}</p>
          ))}
        </div>
      </>
    )
  }
}

class App extends React.Component {
  state = {
    message: 'this is message',
    list: [1, 2, 3],
    sonStatus: '',
  }

  getMsg = (text) => {
    this.setState({
      sonStatus: text,
    })
  }

  render() {
    return (
      <>
        <SonFunctionA getMsg={this.getMsg} />
        <SonFunctionB sonStatus={this.state.sonStatus} />
        {/* <SonClass message={this.state.message} list={this.state.list} getMsg={this.getMsg} /> */}
      </>
    )
  }
}

export default App
