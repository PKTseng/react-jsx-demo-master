import React from "react"

function Fun() {
  const clickHandler = () => {
    console.log("fun")
  }

  return (
    <>
      <button onClick={clickHandler}>click</button>
    </>
  )
}

class Hello extends React.Component {
  render() {
    return (
      <>
        <div>test</div>
        <Fun />
      </>
    )
  }
}

function App() {
  return (
    <>
      <div>
        <Hello />
      </div>
    </>
  )
}

export default App
