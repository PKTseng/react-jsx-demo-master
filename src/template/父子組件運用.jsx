import React from 'react'

function ListItem({ item, deleteItem }) {
  return (
    <>
      <h2>{item.name}</h2>
      <p>{item.price}</p>
      <p>{item.info}</p>
      <button onClick={() => deleteItem(item)}>deleteItem</button>
    </>
  )
}

class App extends React.Component {
  state = {
    list: [
      { id: 1, name: '超级好吃的棒棒糖', price: 18.8, info: '开业大酬宾，全场8折' },
      { id: 2, name: '超级好吃的大鸡腿', price: 34.2, info: '开业大酬宾，全场8折' },
      { id: 3, name: '超级无敌的冰激凌', price: 14.2, info: '开业大酬宾，全场8折' },
    ],
  }

  deleteItem = (emitItem) => {
    this.setState({
      list: this.state.list.filter((i) => i.id !== emitItem.id),
    })
  }

  render() {
    return (
      <>
        {this.state.list.map((item) => (
          <ListItem item={item} key={item.id} deleteItem={this.deleteItem} />
        ))}
      </>
    )
  }
}

export default App
