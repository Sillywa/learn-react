import React, { Component, PureComponent } from 'react'

class Child extends PureComponent {
  state = {
    color: ""
  }

  // 根据 props 生成新的 state
  static getDerivedStateFromProps(nextProps, preState) {
    console.log(nextProps.color, preState.color);
    if(nextProps.color === preState.color) {
      return null
    } else {
      return {
        color: nextProps.color
      }
    }
  }

  componentDidMount() {
    // console.log("child componentDidMount");
    setTimeout(() => {
      this.setState({
        color: "green"
      })
    }, 3000)
  }

  // updating
  // UNSAFE_componentWillReceiveProps(nextProps) {
  //   // console.log(nextProps);
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return !(this.props.title === nextProps.title)
  // }

  // UNSAFE_componentWillUpdate() {
  //   // console.log("componentWillUpdate");
  // }

  render() {
    console.log("child render");
    return (
      <div>
        Child color: { this.state.color }
      </div>
    )
  }

  componentDidUpdate() {
    // console.log("componentDidUpdate");
  }
}

export class App extends Component {
  // 最先执行，只执行一次，一定会执行
  constructor(props) {
    // 初始化 props 和 state
    super(props)
    this.state = {
      x: 0,
      color: "red"
    }
  }
  // mounting
  // componentWillMount() {
  // }
  // UNSAFE_componentWillMount() {
  //   // this.setState({
  //   //   x: 9
  //   // })
  //   // console.log("UNSAFE_componentWillMount");
  // }
  render() {
    console.log("parent render");
    return (
      <div>
        <Child title="hello" color={this.state.color} />
      </div>
    )
  }
  componentDidMount() {
    // console.log("parent componentDidMount");
    // 父组件 render 执行，子组件 render 一定执行
    setTimeout(() => {
      this.setState({
        x: 0,
        color: "yellow"
      })
    }, 2000)
  }

  componentWillUnmount() {
    // console.log("componentWillUnmount");
  }
}

export default App
