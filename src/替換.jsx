import React from "react"

class Counter extends React.Component {
  state = {
    count: 0,
    list: [1, 2, 3],
    person: {
      name: "ken",
      age: 18,
    },
  }

  addCount = () => {
    this.setState({
      list: [...this.state.list, 4, 5, 6].filter((i) => i !== 2),
    })

    this.setState({
      person: {
        ...this.state.person,
        name: "Eason",
      },
    })
  }

  render() {
    return (
      <>
        <h1>{this.state.person.name}</h1>

        <ul>
          {this.state.list.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>

        <button onClick={this.addCount}>Add</button>
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
