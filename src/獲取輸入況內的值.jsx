import React from "react"

class Counter extends React.Component {
  state = {
    message: "hello world",
  }

  inputMsg = (e) => {
    console.log(e)

    this.setState({
      message: e.target.value,
    })
  }

  render() {
    return (
      <>
        <input type="text" value={this.state.message} onChange={this.inputMsg} />
      </>
    )
  }
}

function App() {
  return (
    <>
      <Counter />
    </>
  )
}

export default App
