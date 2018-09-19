import React from 'react'
import { Link } from 'react-router-dom'

export default props => {
  return (
    props.show
    ? <Link to={props.path}>{props.name}</Link>
    : null
  )
}