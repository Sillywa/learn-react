import React, { Component } from 'react'

import { Route, NavLink, Redirect } from "react-router-dom"

const Home = () => (
  <div>Home</div>
)

const About = () => (
  <div>About</div>
)


export default class Redirects extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><NavLink to="/home">home</NavLink></li>
          <li><NavLink to="/about">about</NavLink></li>
        </ul>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        {/* 重定向 */}
        <Redirect from="/" to="/home">
        </Redirect>
      </div>
    )
  }
}
