import React, { Component } from 'react'
import $ from 'jquery-ajax'
import CommentList from './CommentList'
import CommentForm from './CommentForm'
import style from './style'

class CommentBox extends Component {
  constructor (props) {
    super(props)
    this.state = { data: [] }
    this.loadCommentsFromServer = this.loadCommentsFromServer.bind(this)
  }
  loadCommentsFromServer () {
    $.ajax({
      method: 'GET',
      url: 'http://localhost:3001/comments'
    })
    .then((res) => {
      this.setState({ data: res })
    }, (err) => {
    })
  }
  handleCommentSubmit (e) {
    e.preventDefault()
  }
  componentDidMount () {
    this.loadCommentsFromServer()
    setInterval(this.loadCommentsFromServer, this.props.pollInterval)
  }
  render () {
    return (
      <div style={style.commentBox}>
        <h2>Comments:</h2>
        <CommentList data={this.state.data} />
        <CommentForm onCommentSubmit={(event) => this.handleCommentSubmit(event)} />
      </div>
    )
  }
}

export default CommentBox
