import React, { Component } from 'react'
import style from './style'
import $ from 'jquery-ajax'

class CommentForm extends Component {
  constructor () {
    super()
    this.state = { author: '', text: '' }
  }
  handleAuthorChange (e) {
    this.setState({ author: e.target.value })
  }
  handleTextChange (e) {
    this.setState({ text: e.target.value })
  }
  handleSubmit (e) {
    e.preventDefault()
    $.ajax({
      method: 'POST',
      url: 'http://localhost:3001/comments',
      data: {
        text: this.state.text,
        author: this.state.author
      }
    })
    .then(res => {
      console.log(res)
    })
  }

  render () {
    return (
      <form style={style.commentForm} onSubmit={(event) => this.handleSubmit(event)}>
        <input
          type='text'
          placeholder='Your name...'
          style={style.commentFormAuthor}
          value={this.state.author}
          onChange={(event) => this.handleAuthorChange(event)} />
        <input
          type='text'
          placeholder='Say something...'
          style={style.commentFormText}
          value={this.state.text}
          onChange={(event) => this.handleTextChange(event)} />
        <input
          type='submit'
          style={style.commentFormPost}
          value='Post' />
      </form>
    )
  }
}

export default CommentForm
