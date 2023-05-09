import React from "react"

class HelloComponents extends React.Component {
  handleClassClick = (e) => {
    e.preventDefault()
    // e.stopPropagation()

    console.log("handleClassClick", e)
  }

  render() {
    return (
      <div>
        <a href="https://www.google.com/" onClick={this.handleClassClick}>
          A Link
        </a>
        <h1>this is a hello components</h1>
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
      <HelloComponents></HelloComponents>
    </>
  )
}

export default App
