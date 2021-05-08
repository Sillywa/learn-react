import React, { Component } from "react";

import {
  Route,
  Switch,
  withRouter,
} from "react-router-dom";

import "./style.css";

class Home extends Component {
  render() {
    return <div>Home</div>;
  }
}
// const Home = () => <div>Home</div>;

// const About = () => <div>About</div>;
class About extends Component {
  render() {
    return <div>About</div>;
  }
}

const DashBord = () => <div>DashBord</div>;

const Profile = withRouter((props) => <div>Profile</div>);

const navlist = [
  {
    id: "001",
    name: "Home",
  },
  {
    id: "002",
    name: "About",
  },
  {
    id: "003",
    name: "DashBord",
  },
  {
    id: "004",
    name: "Profile",
  },
];

/*
const MyNavLink = () => {
  // 使用 hooks 得到 location，不用使用 withRouter 来进行属性传递
  let location = useLocation()
  console.log(location);
  return navlist.map(({ id, name }) => (
    <li key={id}>
      {true ? ">" : ""} {name}
    </li>
  ));
};
*/

class MyNavLink extends Component {
  handleClick = (path) => (e) => {
    const { history } = this.props
    history.push("/" + path.toLocaleLowerCase())
  }
  render() {
    const { handleClick } = this
    const { pathname } = this.props.location;
    return navlist.map(({ id, name }) => (
      <li key={id} onClick={handleClick(name)}>
        {pathname === ("/" + name).toLocaleLowerCase() ? ">" : ""} {name}
      </li>
    ));
  }
}
// 如果不加 withRouter，在 MyNavLink 里面的 props 里拿不到路由信息
const MyNavLinkWithRouter = withRouter(MyNavLink);

export default class CustomLink extends Component {
  render() {
    return (
      <div>
        <ul>
          <MyNavLinkWithRouter></MyNavLinkWithRouter>
          {/* <li>
            <NavLink exact to="/" activeClassName="selected">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="selected">About</NavLink>
          </li>
          <li>
            <NavLink to="/dashBord" activeClassName="selected">dashBord</NavLink>
          </li>
          <li>
            <NavLink to="/profile" activeClassName="selected">profile</NavLink>
          </li> */}
        </ul>
        <Switch>
          <Route path="/profile">
            <Profile></Profile>
          </Route>
          {/* component 可以传递一个类组件或者一个函数式组件 */}
          <Route path="/dashBord" component={DashBord}></Route>
          {/* render属性需要传递一个函数式组件，不能是类组件 */}
          <Route path="/about" render={(props) => <About {...props} />}></Route>
          {/* children也只能传递一个函数式组件，不能是类组件，如果不与 Switch 结合，children不管路由是否匹配都会渲染 */}
          <Route path="/" children={(props) => <Home {...props} />}></Route>
        </Switch>
      </div>
    );
  }
}
