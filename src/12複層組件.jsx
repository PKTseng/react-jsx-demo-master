import React from "react"

class Counter extends React.Component {
  state = {
    count: 0,
  }
  addCount = () => {
    this.setState({
      count: this.state.count + 1,
    })
  }

  render() {
    return (
      <>
        <h1>{this.state.count}</h1>
        <button onClick={this.addCount}> Count +1 </button>
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
