// 动态路由
import React, { Component } from 'react'
import { Route, Link } from "react-router-dom"

const Child = props => {
  console.log(props);
  return (
    <div>id{props.match.params.id}</div>
  )
}

export default class UrlParameters extends Component {
  render() {
    return (
      <div>
        <Link to="/aaa">aaa</Link>
        <Link to="/bbb">bbb</Link>
        <Link to="/ccc">ccc</Link>
        <Route path="/:id" component={Child}></Route>
      </div>
    )
  }
}
