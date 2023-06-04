import React from 'react'

function SonFunction({ message, getMsg }) {
  return (
    <>
      <h2>Function {message}</h2>
      <button onClick={() => getMsg('hello world')}>getMsg</button>
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
  }

  getMsg = (sonMsg) => {
    console.log('sonMsg', sonMsg)
  }

  render() {
    return (
      <>
        <SonFunction message={this.state.message} list={this.state.list} getMsg={this.getMsg} />
        <SonClass message={this.state.message} list={this.state.list} getMsg={this.getMsg} />
      </>
    )
  }
}

export default App
