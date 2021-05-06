import React, { Component } from 'react'

const Child1 = props => {
  return (
    <div onClick={props.onReceiveData.bind(this, "hello")}>Child1</div>
  )
}

const Child2 = props => {
  return (
    <div>Child2 {props.data}</div>
  )
}

class StateUplifting extends Component {
  state = {
    data: ""
  }
  handleReceiveData(msg) {
    this.setState({
      data: msg
    })
  }
  render() {
    return (
      <div>
        <Child1 onReceiveData={this.handleReceiveData.bind(this)} />
        <Child2 data={this.state.data}/>
      </div>
    )
  }
}

export default StateUplifting
