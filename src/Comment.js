import React, { Component } from 'react'
import style from './style'
import marked from 'marked'

class Comment extends Component {
  // rawMarkup () {
  //   let rawMarkup = marked(this.props.children.toString())
  //   return { __html: rawMarkup }
  // }
  render () {
    return (
      <div style={style.comment}>
        <h1>{this.props.author}</h1>
        <h3>{this.props.children}</h3>
      </div>
    )
  }
}

export default Comment
