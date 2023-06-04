import React, { createRef } from "react"

class Counter extends React.Component {
  msgRef = createRef()

  getValue = () => {
    console.log(this.msgRef.current.value)
  }

  render() {
    return (
      <>
        <input type="text" ref={this.msgRef} />

        <button onClick={this.getValue}>GET VALUE</button>
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
