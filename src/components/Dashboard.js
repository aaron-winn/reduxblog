import React from 'react'
import { connect } from 'react-redux'
import BlogForm from './BlogForm'
import Blog from './Blog'

const Dashboard = ({ blogs }) => (
  <div>
    <h1>Hello World</h1>
      <BlogForm />
    <ul>
      <h2>All blogs:</h2>
      { blogs.map( (b) => <Blog key={b.id} { ...b } /> ) }
    </ul>
  </div>
)

const mapStateToProps = (state) => {
  return { blogs: state.blogs }
}

export default connect(mapStateToProps)(Dashboard)

