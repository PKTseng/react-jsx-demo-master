import React from "react"

class HelloComponents extends React.Component {
  state = {
    name: "ken",
  }

  changeName = () => {
    this.setState({
      name: "change Name",
    })
  }

  render() {
    return (
      <div>
        <h1 onClick={this.changeName}>{this.state.name}</h1>
      </div>
    )
  }
}

function Hello() {
  const handleClick = () => {
    console.log("handleClick")
  }

  return (
    <>
      <h1 onClick={handleClick}>Hello</h1>
    </>
  )
}

function App() {
  return (
    <>
      <Hello />
      <HelloComponents></HelloComponents>
    </>
  )
}

export default App
