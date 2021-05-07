import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"


const Home = () => (
  <div>Home</div>
)

const About = () => (
  <div>About</div>
)

const DashBord = () => (
  <div>DashBord</div>
)

export default class App extends Component {
  render() {
    return (
      <div>  
        <Router>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">about</Link></li>
            <li><Link to="/dashBord">dashBord</Link></li>
          </ul>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/dashBord" component={DashBord}></Route>
        </Router>
      </div>
    )
  }
}
