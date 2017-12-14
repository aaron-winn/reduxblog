import React from 'react'
import { connect } from 'react-redux'
import { addBlog } from '../actions/blogs'
import { incId } from '../actions/nextId'

class BlogForm extends React.Component {

  state = { title: "", content: "", filter: "" }

  handleSubmit = (e) => {
    e.preventDefault()
    const { title, content, filter } = this.state
    const { id, dispatch } = this.props
    const blog = { id, title, content, filter }
    dispatch( addBlog(blog) )
    dispatch( incId() )
    this.setState({ title: "", content: "" })
  }

  handleTitleChange = (e) => {
    this.setState({ title: e.target.value })
  }

  handleContentChange = (e) => {
    this.setState({ content: e.target.value })
  }

  render() {
    return(
      <form onSubmit={ this.handleSubmit }>
        <input required value={ this.state.title } onChange={ this.handleTitleChange } />
        <input required value={ this.state.content } onChange={ this.handleContentChange } />
        <button type="submit">Save</button>
      </form>
    )
  }
  
}

const mapStateToProps = (state) => {
  return { id: state.nextId }
}

export default connect(mapStateToProps)(BlogForm)