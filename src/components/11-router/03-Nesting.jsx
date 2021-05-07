import React, { Component } from 'react'
import { Route, Link, Switch } from "react-router-dom"

const Home = () => (
  <div>Home</div>
)

const Topics = (props) => {
  const { path, url } = props.match
  return (
    <div>
      <h1>Topic</h1>
      <hr />
      <ul>
        <li><Link to={`${url}/rendering`}>Rendering</Link></li>
        <li><Link to={`${url}/components`}>Components</Link></li>
        <li><Link to={`${url}/propsstate`}>PropsState</Link></li>
      </ul>
      <Route path={path} exact>
        <p>请选择一个 topic</p>
      </Route>
      <Route path={`${path}/:topic`} component={Topic}></Route>
      {/* <Route path={`${path}/components`} component={Components}></Route>
      <Route path={`${path}/propsstate`} component={PropsState}></Route> */}
    </div>
  )
    
}

const Topic = props => {
  console.log(props)
  const { params } = props.match
  return (
    <div>{params.topic}</div>
  )
}

// const Rendering = () => (
//   <div>Rendering</div>
// )

// const Components = () => (
//   <div>Components</div>
// )

// const PropsState = () => (
//   <div>Props vs State</div>
// )

export default class Nesting extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/topics">Topic</Link></li>
        </ul>
        {/* 包容性路由 */}
        <Switch>
          {/* 排他性路由 */}
          <Route path="/topics" component={Topics}></Route>
          <Route path="/" component={Home}></Route>
          
        </Switch>     
      </div>
    )
  }
}
