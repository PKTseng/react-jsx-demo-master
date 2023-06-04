import React, { createContext } from 'react'

const { Provider, Consumer } = createContext()

function ComB() {
  return (
    <>
      <div>ComB </div>
      <Consumer>{(value) => <p>{value}</p>}</Consumer>
    </>
  )
}

function ComA() {
  return (
    <>
      <ComB />
    </>
  )
}

class App extends React.Component {
  state = {
    msg: 'test',
  }

  render() {
    return (
      <>
        <Provider value={this.state.msg}>
          <ComA />
        </Provider>
      </>
    )
  }
}

export default App
