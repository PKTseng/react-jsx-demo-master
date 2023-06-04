import './index.css'
import avatar from './images/avatar.png'

import React from 'react'
import { v4 as uuid } from 'uuid'

function getTime(time) {
  return `${time.getFullYear()}/${time.getMonth() + 1}/${time.getDate()} ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()} `
}

class AppClass extends React.Component {
  // 依赖的数据
  state = {
    // hot: 热度排序  time: 时间排序
    tabs: [
      {
        id: 1,
        name: '热度',
        type: 'hot',
      },
      {
        id: 2,
        name: '时间',
        type: 'time',
      },
    ],
    active: 'hot',
    list: [
      {
        id: 1,
        author: '刘德华',
        comment: '给我一杯忘情水',
        time: new Date('2021-10-10 09:09:00'),
        // 1: 点赞 0：无态度 -1:踩
        attitude: 1,
      },
      {
        id: 2,
        author: '周杰伦',
        comment: '哎哟，不错哦',
        time: new Date('2021-10-11 09:09:00'),
        // 1: 点赞 0：无态度 -1:踩
        attitude: 0,
      },
      {
        id: 3,
        author: '五月天',
        comment: '不打扰，是我的温柔',
        time: new Date('2021-10-11 10:09:00'),
        // 1: 点赞 0：无态度 -1:踩
        attitude: -1,
      },
    ],

    comment: '',
  }

  switchValue = (type) => {
    this.setState({
      active: type,
    })
  }

  inputComment = (e) => {
    this.setState({
      comment: e.target.value,
    })
  }

  submitComment = () => {
    if (this.state.comment === '') {
      alert('請輸入內容')

      return
    }

    this.setState({
      list: [
        ...this.state.list,
        {
          id: uuid(),
          author: 'ken',
          comment: this.state.comment,
          time: new Date(),
          attitude: 0,
        },
      ],

      comment: '',
    })
  }

  deleteComment = (id) => {
    this.setState({
      list: this.state.list.filter((i) => i.id !== id),
    })
  }

  selectLike = (currentItem) => {
    const { attitude, id } = currentItem

    this.setState({
      list: this.state.list.map((item) => {
        if (id === item.id) {
          return {
            ...item,
            attitude: attitude === 1 ? 0 : 1,
          }
        } else {
          return item
        }
      }),
    })
  }

  selectHate = (currentItem) => {
    const { id, attitude } = currentItem

    this.setState({
      list: this.state.list.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            attitude: attitude === -1 ? 0 : -1,
          }
        } else {
          return item
        }
      }),
    })
  }

  render() {
    return (
      <div className="App">
        <div className="comment-container">
          {/* 评论数 */}
          <div className="comment-head">
            <span>5 评论</span>
          </div>

          {/* 排序 */}
          <div className="tabs-order">
            <ul className="sort-container">
              {this.state.tabs.map((i) => (
                <li onClick={() => this.switchValue(i.type)} className={i.type === this.state.active ? 'on' : ''} key={i.id}>
                  按{i.name}排序
                </li>
              ))}
            </ul>
          </div>

          {/* 添加评论 */}
          <div className="comment-send">
            <div className="user-face">
              <img className="user-head" src={avatar} alt="" />
            </div>
            <div className="textarea-container">
              <textarea cols="80" rows="5" placeholder="发条友善的评论" className="ipt-txt" value={this.state.comment} onChange={this.inputComment} />
              <button className="comment-submit" onClick={this.submitComment}>
                发表评论
              </button>
            </div>
            <div className="comment-emoji">
              <i className="face"></i>
              <span className="text">表情</span>
            </div>
          </div>

          {/* 评论列表 */}
          <div className="comment-list">
            {this.state.list.map((i) => (
              <div className="list-item" key={i.id}>
                <div className="user-face">
                  <img className="user-head" src={avatar} alt="" />
                </div>
                <div className="comment">
                  <div className="user">{i.author}</div>
                  <p className="text">{i.comment}</p>
                  <div className="info">
                    <span className="time">{getTime(i.time)}</span>
                    <span className={i.attitude === 1 ? 'like liked' : 'like'} onClick={() => this.selectLike(i)}>
                      <i className="icon" />
                    </span>
                    <span className={i.attitude === -1 ? 'hate hated' : 'hate'} onClick={() => this.selectHate(i)}>
                      <i className="icon" />
                    </span>
                    <span className="reply btn-hover" onClick={() => this.deleteComment(i.id)}>
                      删除
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

function App() {
  return (
    <>
      <AppClass />
    </>
  )
}

export default App
