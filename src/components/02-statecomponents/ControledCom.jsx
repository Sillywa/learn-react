import React, { Component, createRef } from 'react'

export default class ControledCom extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: "hello"
    }
    this.input = createRef()
  }
  
  handleChange(e) {
    this.setState({
      value: e.target.value
    })
  }
  handleInput() {
    console.log(this.input.current.value);
  }
  render() {
    return (
      <div>
        受控组件： <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)}/> <br/>
        非受控组件： <input type="text" defaultValue="abc" onInput={this.handleInput.bind(this)} ref={this.input} />
      </div>
    )
  }
}
