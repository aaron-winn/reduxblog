import React from 'react'
import { connect } from 'react-redux'
import { setFilter } from '../actions/filter'

const Blog = ({ title, content, date, filter, dispatch, id }) => (
  <li>
    <b>Title:</b> { title } <br />
    <b>Created:</b> { date } <br />
    <b>Content:</b> { content }
    <button onClick={() => dispatch(setFilter(id)) }>X</button>
  </li>
)

export default connect()(Blog)