import React, { Component } from "react";

import { Route, NavLink, Switch } from "react-router-dom";

import "./style.css";

class Home extends Component {
  render() {
    return (
      <div>Home</div>
    )
  }
  componentDidMount() {
    console.log(this.props);
  }
}
// const Home = () => <div>Home</div>;

// const About = () => <div>About</div>;
class About extends Component {
  render() {
    return (
      <div>About</div>
    )
  }
  componentDidMount() {
    console.log(this.props);
  }
}

const DashBord = () => <div>DashBord</div>;

export default class CustomLink extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/dashBord">dashBord</NavLink>
          </li>
        </ul>
        {/* <Switch> */}
          {/* component 可以传递一个类组件或者一个函数式组件 */}
          <Route path="/dashBord" component={DashBord}></Route>
          {/* render属性需要传递一个函数式组件，不能是类组件 */}
          <Route path="/about" render={(props) => <About {...props} />}></Route>
          {/* children也只能传递一个函数式组件，不能是类组件，如果不与 Switch 结合，children不管路由是否匹配都会渲染 */}
          <Route path="/" children={props => <Home {...props} />}></Route>
        {/* </Switch> */}
      </div>
    );
  }
}
