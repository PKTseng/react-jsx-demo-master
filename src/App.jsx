import React from 'react'

function ListItem({ i, deleteItem }) {
  return (
    <>
      <h2>{i.name}</h2>
      <p>{i.price}</p>
      <p>{i.info}</p>

      <button onClick={() => deleteItem(i)}>deleteItem</button>
    </>
  )
}

class App extends React.Component {
  state = {
    // 列表数据
    list: [
      { id: 1, name: '超级好吃的棒棒糖', price: 18.8, info: '开业大酬宾，全场8折' },
      { id: 2, name: '超级好吃的大鸡腿', price: 34.2, info: '开业大酬宾，全场8折' },
      { id: 3, name: '超级无敌的冰激凌', price: 14.2, info: '开业大酬宾，全场8折' },
    ],
  }

  deleteItem = (i) => {
    this.setState({
      list: this.state.list.filter((item) => i.id !== item.id),
    })
  }

  render() {
    return (
      <>
        {this.state.list.map((i) => (
          <ListItem i={i} key={i.id} deleteItem={this.deleteItem} />
        ))}
      </>
    )
  }
}

export default App
